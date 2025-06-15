import { z } from "zod";
import { BirdSchema, DaySchema, NakshatraSchema } from "./names";

// Reusable Enums

// Helper schema

let arrayOfBirds = z.array(BirdSchema);
let arrayOfDays = z.array(DaySchema);

const dayTimeSchema = z.object({
    Sunday: arrayOfBirds,
    Monday: arrayOfBirds,
    Tuesday: arrayOfBirds,
    Wednesday: arrayOfBirds,
    Thursday: arrayOfBirds,
    Friday: arrayOfBirds,
    Saturday: arrayOfBirds,
});

const pakshaActivitySchema = z.object({
    Day_time: dayTimeSchema,
    Night_time: dayTimeSchema,
});

const birdActivitySchema = z.object({
    Suklapaksha: pakshaActivitySchema,
    Krishnapaksha: pakshaActivitySchema,
});

const birdRelationSchema = z.object({
    Friend: arrayOfBirds,
    Enemy: arrayOfBirds,
    Death_Days: arrayOfDays,
    Day_time: arrayOfDays,
    Night_time: arrayOfDays,
});

const pakshaRelationSchema = z.object({
    Crow: birdRelationSchema,
    Vulture: birdRelationSchema,
    Owl: birdRelationSchema,
    Peacock: birdRelationSchema,
    Cock: birdRelationSchema,
});

export const mainDataSchema = z.object({
    Birth_Nakshatra: z.array(
        z.object({
            Nakshatra: NakshatraSchema,
            Suklapaksha: BirdSchema,
            Krishnapaksha: BirdSchema,
        })
    ),

    Pakshi_Ruling_Days: z.object({
        Suklapaksha: pakshaRelationSchema,
        Krishnapaksha: pakshaRelationSchema,
    }),

    Pakshi_Daily_Activity: z.record(BirdSchema, birdActivitySchema),
});
