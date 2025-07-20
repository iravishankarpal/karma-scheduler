import { format, parse, differenceInMinutes, addMinutes } from "date-fns";

export function getTimeDivision(sunrise: string, sunset: string, today: Date = new Date()) {
    const sunriseTime = parse(sunrise, "HH:mm", today);
    const sunsetTime = parse(sunset, "HH:mm", today);

    const totalDayMinutes = differenceInMinutes(sunsetTime, sunriseTime);
    const totalNightMinutes = 1440 - totalDayMinutes; // 1440 = total minutes in a day

    const daySlotMinutes = Math.floor(totalDayMinutes / 5);
    const nightSlotMinutes = Math.floor(totalNightMinutes / 5);

    // 🌞 Day Divisions
    const divisionsDay = Array.from({ length: 5 }, (_, i) => {
        const start = addMinutes(sunriseTime, i * daySlotMinutes);
        const end = i === 4 ? sunsetTime : addMinutes(sunriseTime, (i + 1) * daySlotMinutes);
        return {
            startTime: format(start, "hh:mm a"),
            start: format(start, "HH:mm"),
            end: format(end, "HH:mm"),
            endTime: format(end, "hh:mm a"),
        };
    });

    // 🌙 Night Divisions (starting from sunset)
    const divisionsNight = Array.from({ length: 5 }, (_, i) => {
        const start = addMinutes(sunsetTime, i * nightSlotMinutes);
        const end = addMinutes(sunsetTime, (i + 1) * nightSlotMinutes);
        return {
            startTime: format(start, "hh:mm a"),
            start: format(start, "HH:mm"),
            end: format(end, "HH:mm"),
            endTime: format(end, "hh:mm a"),
        };
    });

    return {
        daySlotMinutes,
        nightSlotMinutes,
        day: divisionsDay,
        night: divisionsNight,
        sunrise: format(sunriseTime, "HH:mm"),
        sunset: format(sunsetTime, "HH:mm"),
        totalDayMinutes,
        totalNightMinutes,
        fullDay: [...divisionsDay, ...divisionsNight],
    };
}
