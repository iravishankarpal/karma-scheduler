import data from "@/data/data";
import ipInfo from "@/lib/axios/ipinfo";
import { getTimeDivision } from "@/logic/time/timedivistion";
import { tDay, BirdSchema, DaySchema } from "@/schema/names";
import { getPakshaStatus, getSunriseTime, getSunsetTime } from "@/services/suncalc";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date") || new Date().toISOString();
    const bird = searchParams.get("bird") || "Crow";

    let lat = parseFloat(searchParams.get("lat") || "0");
    let lon = parseFloat(searchParams.get("lon") || "0");

    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0] || ""; // empty means "auto detect"
    console.log("ip :", ip);

    if (ip && ip !== "::1") {
        const response = await ipInfo.get(`/${ip}`);
        const { city, region, country, loc } = response.data;
        console.log("response.data :", response.data);
        lat = parseFloat(loc?.split(",")[0]);
        lon = parseFloat(loc?.split(",")[1]);
    }
    // if (!lat || !lon) {
    //     return new Response("Latitude and Longitude are required.", { status: 400 });
    // }

    const day = new Date(date);
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

    const timeDivision = getTimeDivision(sunrise.toISOString().substring(11, 16), sunset.toISOString().substring(11, 16));

    if (!timeDivision) {
        return new Response("Error calculating time divisions.", { status: 500 });
    }

    const fullDay = timeDivision.fullDay.map((slot, index) => ({
        startTime: slot.startTime,
        endTime: slot.endTime,
        Event: anyInfo[index] || "No Activity",
    }));

    return new Response(JSON.stringify(fullDay), {
        headers: { "Content-Type": "application/json" },
    });
}
