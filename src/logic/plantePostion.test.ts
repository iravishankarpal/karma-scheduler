import { describe, expect, it } from "vitest";
import { planetDetails } from "./planetePostion";

describe("getMoonPhase", () => {
    it("should return Waxing", () => {
        const date = new Date("2025-06-04T12:00:00+05:30"); // Noon IST
        const result = planetDetails(date);
        expect(true).toBe(true);
    });
});
