import { PakshaStatus } from "@/constants/common";
import { julian, moonposition, solar } from "astronomia";

function toJulianDay(date: Date): number {
    const y = date.getUTCFullYear();
    const m = date.getUTCMonth() + 1;
    const D = date.getUTCDate() + (date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600) / 24;
    return julian.CalendarGregorianToJD(y, m, D);
}

function angleDiff(a: number, b: number): number {
    return ((a - b + 540) % 360) - 180;
}

export function getPakshaStatus(date: Date): PakshaStatus {
    const jd = toJulianDay(date);

    // Check elongation slightly before and after to see if Moon is waxing
    const jdBefore = jd - 0.04;
    const jdAfter = jd + 0.04;

    const sunLonBefore = solar.apparentLongitude(jdBefore);
    const moonLonBefore = moonposition.position(jdBefore).lon;
    const elongationBefore = (moonLonBefore - sunLonBefore + 360) % 360;

    const sunLonAfter = solar.apparentLongitude(jdAfter);
    const moonLonAfter = moonposition.position(jdAfter).lon;
    const elongationAfter = (moonLonAfter - sunLonAfter + 360) % 360;

    const isWaxing = angleDiff(elongationAfter, elongationBefore) > 0;
    const paksha = isWaxing ? "Shukla" : "Krishna";

    console.log("Elongation before:", elongationBefore.toFixed(3), "| after:", elongationAfter.toFixed(3));
    console.log("Result:", paksha);

    return paksha;
}
