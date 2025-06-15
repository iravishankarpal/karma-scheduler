import { z } from "zod";

export const BirdSchema = z.enum(["Crow", "Vulture", "Owl", "Peacock", "Cock"]);

export type tBird = z.infer<typeof BirdSchema>;

export const DaySchema = z.enum(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);

export type tDay = z.infer<typeof DaySchema>;

export const PakshaSchema = z.enum(["Suklapaksha", "Krishnapaksha"]);

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

export const names = {
    birds: BirdSchema.enum, // This will give you: { Crow: "Crow", Vulture: "Vulture", ... }
    paksha: PakshaSchema.enum, // This will give you: { Shukla: "Shukla", Krishna: "Krishna" }
    weekdays: DaySchema.enum,
    nakshatra: NakshatraSchema.enum,
};
