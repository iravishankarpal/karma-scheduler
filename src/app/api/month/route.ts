import { syncToCalendar } from "@/controller/syncToCalender";
import data from "@/data/data";
// import ipInfo from "@/lib/axios/ipinfo";
import { getTimeDivisionsISO } from "@/logic/time/timedivistion";
import { tDay, BirdSchema, DaySchema, tPakshaStatus, tBird } from "@/schema/names";
import { getPakshaStatus, getSunriseTime, getSunsetTime } from "@/services/suncalc";
import { format, parse } from "date-fns";

export async function GET() {
    const date = new Date(); // Example date, can be dynamic
    const month = date.getMonth();
    const totalDaysInMonth = new Date(date.getFullYear(), month + 1, 0).getDate();
    const bird = "Crow";
    const lat = parseFloat("19.2000");
    const lon = parseFloat("73.1667");

    let getWholeMonthInfo = (date: string) => {
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
        const convertTo24Hr = (str: string) => {
            const parsed = parse(str, "hh:mm a", new Date());
            return format(parsed, "HH:mm");
        };
        const timeDivision = getTimeDivisionsISO(
            convertTo24Hr(sunriseStr),
            convertTo24Hr(sunsetStr),
            day
        );
        const fullDay = timeDivision.map((slot, index) => {
            return {
                startDateTime: format(new Date(slot.startDateTime), "yyyy-MM-dd'T'HH:mm:ss"),
                endDateTime: format(new Date(slot.endDateTime), "yyyy-MM-dd'T'HH:mm:ss"),
                Event: anyInfo[index] || "No Activity",
            };
        });
        let temp = {
            date: format(day, "yyyy-MM-dd"),
            bird: birdParsed,
            paksha,
            weekday: parsedDay,
            sunriseStr,
            sunsetStr,
            fullDay: fullDay,
        };
        return temp;
    };
    console.clear();
    const temp = Array.from({ length: totalDaysInMonth }, (_, index) => {
        const day = new Date(date.getFullYear(), month, index + 1);
        console.log("day :", day);
        return getWholeMonthInfo(day as unknown as string);
    });
    // for (const dayInfo of temp) {
    // await syncToCalendar(dayInfo?.fullDay);
    // }
    return new Response(JSON.stringify(temp), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}
