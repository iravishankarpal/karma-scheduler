import { describe, expect, it } from "vitest";

import { getMoonPhase } from "./suncalc";

describe("getMoonPhase", () => {
    it("should return Waxing", () => {
        const date = new Date("2025-06-04T12:00:00+05:30"); // Noon IST
        const result = getMoonPhase(date);
        expect(result).toBe("Waxing");
    });
    it("should return Wanning", () => {
        const date = new Date("2025-06-14T12:00:00+05:30"); // Noon IST
        const result = getMoonPhase(date);
        expect(result).toBe("Waning");
    });

    it("should return same data waxing", () => {
        // const date = new Date("2025-06-14T12:00:00+05:30"); // Noon IST
        const date = new Date("2025-06-11T11:10:00+05:30"); // Noon IST
        const result = getMoonPhase(date);
        expect(result).toBe("Waxing");
    });

    it("should return same data wanning", () => {
        // const date = new Date("2025-06-14T12:00:00+05:30"); // Noon IST
        const date = new Date("2025-06-11T17:10:00+05:30"); // Noon IST
        const result = getMoonPhase(date);
        expect(result).toBe("Waning");
    });
    it("should return same data Krishna", () => {
        // const date = new Date("2025-06-14T12:00:00+05:30"); // Noon IST
        const date = new Date("2020-03-22T17:10:00+05:30"); // Noon IST
        const result = getMoonPhase(date);
        expect(result).toBe("Waning");
    });
});
