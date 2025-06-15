import { moonposition, julian } from "astronomia";

export function getMoonLongitude(date: Date): number {
    const jd = julian.CalendarGregorianToJD(
        date.getUTCFullYear(),
        date.getUTCMonth() + 1,
        date.getUTCDate() + (date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600) / 24
    );
    const moon = moonposition.position(jd);
    return moon.lon;
}
