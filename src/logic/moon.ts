import { julian, moonposition } from "astronomia";

export function getMoonLongitude(date: Date): number {
    const y = date.getUTCFullYear();
    const m = date.getUTCMonth() + 1;
    const D = date.getUTCDate() + (date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600) / 24;
    const jd = julian.CalendarGregorianToJD(y, m, D);

    const moonLon = moonposition.position(jd).lon;
    return moonLon; // In degrees
}
