import { z } from "zod";
export const birdsArray = ["Crow", "Vulture", "Owl", "Peacock", "Cock"] as const;
export const BirdSchema = z.enum(birdsArray);
export type tBird = z.infer<typeof BirdSchema>;

export const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
] as const;
export const DaySchema = z.enum(daysArray);
export type tDay = z.infer<typeof DaySchema>;

export const dayNightArray = ["Day", "Night"] as const;
export const DayNightSchema = z.enum(dayNightArray);
export type tDayNight = z.infer<typeof DayNightSchema>;

export const pakshaArray = ["Suklapaksha", "Krishnapaksha"] as const;
export const PakshaSchema = z.enum(pakshaArray);
export type tPakshaStatus = z.infer<typeof PakshaSchema>;

export const NakshatraSchema = z.enum([
    "Aswini",
    "Bharani",
    "Krittika",
    "Rohini",
    "Mrigasira",
    "Ardra",
    "Punarvasu",
    "Pushya",
    "Ashlesha",
    "Makha",
    "Purvaphalguni",
    "Uttaraphalguni",
    "Hasta",
    "Chitra",
    "Swati",
    "Vishakha",
    "Anuradha",
    "Jyeshta",
    "Moola",
    "Poorvashada",
    "Uttarashada",
    "Shravana",
    "Dhanishta",
    "Satabhisha",
    "Poorvabhadra",
    "Uttarabhadra",
    "Revati",
]);
export type tNakshatra = z.infer<typeof NakshatraSchema>;

export const ActivitiesArray = ["Sleep", "Death", "Rule", "Eat", "Walk"] as const;
export const ActivitySchema = z.enum(ActivitiesArray);
export type tActivity = z.infer<typeof ActivitySchema>;

export const names = {
    birds: BirdSchema.enum, // This will give you: { Crow: "Crow", Vulture: "Vulture", ... }
    paksha: PakshaSchema.enum, // This will give you: { Shukla: "Shukla", Krishna: "Krishna" }
    weekdays: DaySchema.enum,
    nakshatra: NakshatraSchema.enum,
    activities: ActivitySchema.enum,
};
