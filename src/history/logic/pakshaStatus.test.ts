import { describe, it, expect } from "vitest";
import { getPakshaStatus } from "./paksha";

describe("getPakshaStatus", () => {
    it("should return Shukla for a known Shukla Paksha date test 1", () => {
        const date = new Date("2025-06-04T12:00:00+05:30"); // Noon IST
        const result = getPakshaStatus(date);
        expect(result).toBe("Shukla");
    });

    it("should return Krishna for a known Krishna Paksha date", () => {
        const date = new Date("2025-06-14T12:00:00+05:30"); // Krishna Paksha begins
        const result = getPakshaStatus(date);
        expect(result).toBe("Krishna");
    });

    it("should return Shukla for a known that date shifting to Krishna", () => {
        const date = new Date("2025-06-11T13:10:00+05:30");
        const result = getPakshaStatus(date);
        expect(result).toBe("Shukla");
    });
    it("should return Shukla for a known that date shifted to Krishna", () => {
        const date = new Date("2025-06-11T13:15:00+05:30");
        const result = getPakshaStatus(date);
        expect(result).toBe("Krishna");
    });

    it("should return Shukla for a known Shukla Paksha date", () => {
        const date = new Date("2020-02-28T12:00:00+05:30"); // Noon IST
        const result = getPakshaStatus(date);
        expect(result).toBe("Shukla");
    });
});
