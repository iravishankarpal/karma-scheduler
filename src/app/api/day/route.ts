import data from "@/data/data";
import ipInfo from "@/lib/axios/ipinfo";
import { getTimeDivision } from "@/logic/time/timedivistion";
import { tDay, BirdSchema, DaySchema } from "@/schema/names";
import { getPakshaStatus, getSunriseTime, getSunsetTime } from "@/services/suncalc";
import { format, parse } from "date-fns";

export const dynamic = "force-dynamic"; // This ensures the route is always fresh and not cached

export const revalidate = 0; // Disable revalidation for this route

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date") || new Date().toISOString();
    const bird = searchParams.get("bird") || "Crow";

    let lat = parseFloat(searchParams.get("lat") || "19.2000");
    let lon = parseFloat(searchParams.get("lon") || "73.1667");

    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0] || ""; // empty means "auto detect"
    console.log("ip :", ip);
    if (ip && ip !== "::1") {
        const response = await ipInfo.get(`/${ip}`);
        const { loc } = response.data;
        console.log("response.data :", response.data);
        lat = parseFloat(loc?.split(",")[0]);
        lon = parseFloat(loc?.split(",")[1]);
    }
    // if (!lat || !lon) {
    //     return new Response("Latitude and Longitude are required.", { status: 400 });
    // }

    const day = new Date(date || new Date().toISOString());
    const paksha = getPakshaStatus(day);
    const weekday = day.toLocaleString("en-US", { weekday: "long" });

    const parsedDay = DaySchema.parse(weekday);
    const birdParsed = BirdSchema.parse(bird);

    const info = data.Pakshi_Daily_Activity[birdParsed][paksha];
    const getDayInfo = (day: tDay) => {
        return info.Day_time[day].concat(info.Night_time[day]);
    };

    const anyInfo = getDayInfo(parsedDay);
    if (!anyInfo || anyInfo.length === 0) {
        return new Response("No data found for the specified parameters.", { status: 404 });
    }
    const sunrise = getSunriseTime(day, lat, lon);
    const sunset = getSunsetTime(day, lat, lon);

    const sunriseStr = sunrise.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
    });

    const sunsetStr = sunset.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
    });
    console.table({ sunrise, sunset, sunriseStr, sunsetStr, day: day.toDateString(), lat, lon });

    const convertTo24Hr = (str: string) => {
        const parsed = parse(str, "hh:mm a", new Date());
        return format(parsed, "HH:mm");
    };

    const timeDivision = getTimeDivision(convertTo24Hr(sunriseStr), convertTo24Hr(sunsetStr), day);

    if (!timeDivision) {
        return new Response("Error calculating time divisions.", { status: 500 });
    }

    const fullDay = timeDivision.fullDay.map((slot, index) => {
        const isEarlyAM = parse(slot.start, "HH:mm", new Date()).getHours() < 4;
        const slotDate = new Date(day);
        if (isEarlyAM) slotDate.setDate(slotDate.getDate() + 1);

        const startDateTime = parse(
            `${format(slotDate, "yyyy-MM-dd")} ${slot.start}`,
            "yyyy-MM-dd HH:mm",
            new Date()
        );
        const endDateTime = parse(
            `${format(slotDate, "yyyy-MM-dd")} ${slot.end}`,
            "yyyy-MM-dd HH:mm",
            new Date()
        );

        // handle edge case: end time is AM and earlier than start (means next day)
        if (endDateTime < startDateTime) {
            endDateTime.setDate(endDateTime.getDate() + 1);
        }

        return {
            startTime: slot.startTime,
            endTime: slot.endTime,
            // start: slot.start,
            // end: slot.end,
            date: format(slotDate, "yyyy-MM-dd"),
            // startDateTime: startDateTime.toISOString(),
            // endDateTime: endDateTime.toISOString(),
            Event: anyInfo[index] || "No Activity",
        };
    });

    return new Response(JSON.stringify(fullDay), {
        headers: { "Content-Type": "application/json" },
    });
}
