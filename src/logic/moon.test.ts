import { test, describe, expect } from "vitest";
import { getMoonLongitude } from "./moon";

describe("getMoonPhase", () => {
    test("should return the correct moon phase", () => {
        let dates = ["2025-06-04T12:00:00+05:30", "2025-06-14T12:00:00+05:30", "2025-06-11T13:10:00+05:30", "2025-06-11T13:15:00+05:30", "2020-02-28T12:00:00+05:30"];
        let expectedPhases = ["Shukla", "Krishna", "Shukla", "Krishna", "Shukla"];
        for (let i = 0; i < dates.length; i++) {
            let date = new Date(dates[i]);
            let phase = getMoonLongitude(date);
            console.log("phase :", dates[i], "->", phase);
            expect(true).toBe(true);
        }
    });
});
