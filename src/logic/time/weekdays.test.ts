import { describe, expect, it } from "vitest";
import { getWeekDaysFrom } from "./weekdays";
import { names } from "@/schema/names";

describe("Weekdays", () => {
    it("should return the correct weekday for a given date", () => {
        const date = new Date("2024-06-22"); // A Sunday
        const weekday = getWeekDaysFrom(date);
        expect(weekday[0].label).toBe(names.weekdays.Saturday);
        expect(weekday[0].short).toBe("Sat");
        expect(weekday[0].date).toBe("2024-06-22");
        expect(weekday[0].raw).toEqual(new Date("2024-06-22T00:00:00.000Z"));
    });
});
