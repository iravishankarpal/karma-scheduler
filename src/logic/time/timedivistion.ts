import { format, parse, differenceInMinutes, addMinutes } from "date-fns";

export function getTimeDivision(sunrise: string, sunset: string, today: Date = new Date()) {
    const sunriseTime = parse(sunrise, "HH:mm", today);
    const sunsetTime = parse(sunset, "HH:mm", today);

    const totalDayMinutes = differenceInMinutes(sunsetTime, sunriseTime);
    const totalNightMinutes = 1440 - totalDayMinutes; // 1440 = total minutes in a day

    const daySlotMinutes = Math.floor(totalDayMinutes / 5);
    const nightSlotMinutes = Math.floor(totalNightMinutes / 5);
    const eachActivityMinutesForDay = daySlotMinutes / 5;
    const eachActivityMinutesForNight = nightSlotMinutes / 5;
    // 🌞 Day Divisions
    const divisionsDay = Array.from({ length: 5 }, (_, i) => {
        const start = addMinutes(sunriseTime, i * daySlotMinutes);
        const end = i === 4 ? sunsetTime : addMinutes(sunriseTime, (i + 1) * daySlotMinutes);
        return {
            startTime: format(start, "hh:mm a"),
            start: format(start, "HH:mm"),
            end: format(end, "HH:mm"),
            endTime: format(end, "hh:mm a"),
            duration: differenceInMinutes(end, start),
            activityStart: addMinutes(start, i * eachActivityMinutesForDay),
            activityEnd: i === 4 ? end : addMinutes(start, (i + 1) * eachActivityMinutesForDay),
        };
    });

    // 🌙 Night Divisions (starting from sunset)
    const divisionsNight = Array.from({ length: 5 }, (_, i) => {
        const start = addMinutes(sunsetTime, i * nightSlotMinutes);
        const end =
            i === 4 ? addMinutes(today, 1440) : addMinutes(sunsetTime, (i + 1) * nightSlotMinutes);
        return {
            startTime: format(start, "hh:mm a"),
            start: format(start, "HH:mm"),
            end: format(end, "HH:mm"),
            endTime: format(end, "hh:mm a"),
            duration: differenceInMinutes(end, start),
            activityStart: addMinutes(start, i * eachActivityMinutesForNight),
            activityEnd: i === 4 ? end : addMinutes(start, (i + 1) * eachActivityMinutesForNight),
        };
    });

    return {
        daySlotMinutes,
        nightSlotMinutes,
        eachActivityMinutesForDay,
        eachActivityMinutesForNight,
        day: divisionsDay,
        night: divisionsNight,
        sunrise: format(sunriseTime, "HH:mm"),
        sunset: format(sunsetTime, "HH:mm"),
        totalDayMinutes,
        totalNightMinutes,
        fullDay: [...divisionsDay, ...divisionsNight],
    };
}

export function getTimeDivisionsISO(
    sunrise: string,
    sunset: string,
    today: Date = new Date()
): { startDateTime: string; endDateTime: string }[] {
    const sunriseTime = parse(sunrise, "HH:mm", today);
    const sunsetTime = parse(sunset, "HH:mm", today);

    const totalDayMinutes = differenceInMinutes(sunsetTime, sunriseTime);
    const totalNightMinutes = 1440 - totalDayMinutes;

    const daySlotMinutes = Math.floor(totalDayMinutes / 5);
    const nightSlotMinutes = Math.floor(totalNightMinutes / 5);

    // Day divisions (5 slots)
    const daySlots = Array.from({ length: 5 }, (_, i) => {
        const start = addMinutes(sunriseTime, i * daySlotMinutes);
        const end = i === 4 ? sunsetTime : addMinutes(sunriseTime, (i + 1) * daySlotMinutes);
        return {
            startDateTime: start.toISOString(),
            endDateTime: end.toISOString(),
        };
    });

    // Night divisions (5 slots, careful with day change after midnight)
    const nightSlots = Array.from({ length: 5 }, (_, i) => {
        const start = addMinutes(sunsetTime, i * nightSlotMinutes);
        const end =
            i === 4
                ? addMinutes(sunriseTime, 1440) // next day's sunrise
                : addMinutes(sunsetTime, (i + 1) * nightSlotMinutes);
        return {
            startDateTime: start.toISOString(),
            endDateTime: end.toISOString(),
        };
    });
    return [...daySlots, ...nightSlots];
}
