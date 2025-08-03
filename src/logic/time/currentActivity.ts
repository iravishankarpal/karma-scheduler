import { parse, format, isAfter, isBefore, addMinutes, differenceInMinutes } from "date-fns";
import { mainDataSchema } from "@/schema/data";
import data from "@/data/data";
import { DaySchema, tBird, tDay, tPakshaStatus } from "@/schema/names";

type ActivitySlot = {
    activity: string;
    from: string;
    to: string;
    period: "day" | "night";
};

export function getCurrentPakshiActivity({
    sunrise,
    sunset,
    pakshi,
    paksha,
    dateTime = new Date(),
}: {
    sunrise: string;
    sunset: string;
    pakshi: tBird;
    paksha: tPakshaStatus;
    dateTime?: Date;
}): ActivitySlot | null {
    const parsedData = mainDataSchema.parse(data);
    const activities = parsedData?.Pakshi_Daily_Activity?.[pakshi]?.[paksha];

    if (!activities) return null;

    const sunriseTime = parse(sunrise, "HH:mm", dateTime);
    const sunsetTime = parse(sunset, "HH:mm", dateTime);

    const isDay = isAfter(dateTime, sunriseTime) && isBefore(dateTime, sunsetTime);
    const slots = isDay ? activities.Day_time : activities.Night_time;

    const totalMinutes = differenceInMinutes(
        isDay ? sunsetTime : addMinutes(sunsetTime, differenceInMinutes(sunsetTime, sunriseTime)),
        isDay ? sunriseTime : sunsetTime
    );
    const slotMinutes = Math.floor(totalMinutes / 5);

    for (let i = 0; i < 5; i++) {
        const start = addMinutes(isDay ? sunriseTime : sunsetTime, i * slotMinutes);
        const end =
            i === 4
                ? isDay
                    ? sunsetTime
                    : addMinutes(sunsetTime, totalMinutes)
                : addMinutes(isDay ? sunriseTime : sunsetTime, (i + 1) * slotMinutes);

        if (isAfter(dateTime, start) && isBefore(dateTime, end)) {
            return {
                activity: slots[getDayName(dateTime)][i] ?? "-",
                from: format(start, "hh:mm a"),
                to: format(end, "hh:mm a"),
                period: isDay ? "day" : "night",
            };
        }
    }

    return null;
}

function getDayName(date: Date): tDay {
    return DaySchema.parse(format(date, "EEEE"));
}
