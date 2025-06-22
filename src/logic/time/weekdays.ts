import { DaySchema } from "@/schema/names";
import { format, addDays } from "date-fns";
import { z } from "zod";
let nextDates = z.array(
    z.object({
        label: DaySchema,
        short: z.string(),
        date: z.string(),
        raw: z.date(),
    })
);
export function getWeekDaysFrom(date: Date) {
    let parsed = z.date().parse(date);
    let nextDate = Array.from({ length: 7 }, (_, i) => {
        const current = addDays(parsed, i); // Adjusted to start from the previous day
        return {
            label: format(current, "EEEE"), // "Monday"
            short: format(current, "EEE"), // "Mon"
            date: format(current, "yyyy-MM-dd"), // "2025-06-15"
            raw: current, // Date object if needed
        };
    });
    return nextDates.parse(nextDate);
}
