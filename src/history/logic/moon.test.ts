import { describe, it } from "vitest";
import { getMoonLongitude } from "./moon";

const moonLongitudesJune2025 = {
    "2025-06-01": 15.48,
    "2025-06-02": 28.4,
    "2025-06-03": 41.6,
    "2025-06-04": 54.95,
    "2025-06-05": 68.13,
    "2025-06-06": 81.05,
    "2025-06-07": 93.4,
    "2025-06-08": 105.02,
    "2025-06-09": 115.9,
    "2025-06-10": 126.2,
    "2025-06-11": 136.0,
    "2025-06-12": 145.5,
    "2025-06-13": 155.1,
    "2025-06-14": 164.6,
};

describe("getMoonLongitude", () => {
    it("should print moon longitudes for June 1–14, 2025", () => {
        const dates = Object.keys(moonLongitudesJune2025);
        console.log("| Date       | real Longitude | cal Longitude |");
        console.log("|------------|----------------| -------------|");
        for (let i = 0; i < dates.length; i++) {
            const date = new Date(`${dates[i]}T00:00:00+05:30`);
            const deg = getMoonLongitude(date);
            const realDeg = getMoonLongitudeTimeDAte(date);
            console.log(`| ${dates[i]} | ${realDeg.toFixed(2).padStart(14)}° | ${deg.toFixed(2).padStart(14)}°  |`);
        }
    });
});

function getMoonLongitudeTimeDAte(date: Date): number {
    const iso = date.toISOString().split("T")[0];
    // @ts-expect-error TypeScript does not know about this object
    return moonLongitudesJune2025[iso] ?? -1; // -1 for unknown
}
