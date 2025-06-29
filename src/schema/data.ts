import { z } from "zod";
import { ActivitySchema, BirdSchema, DaySchema, NakshatraSchema } from "./names";

const arrayOfBirds = z.array(BirdSchema).nonempty();
const arrayOfDays = z.array(DaySchema).nonempty();
const arrayOfActions = z.array(ActivitySchema).nonempty();
const dayTimeSchema = z.object({
    Sunday: arrayOfActions,
    Monday: arrayOfActions,
    Tuesday: arrayOfActions,
    Wednesday: arrayOfActions,
    Thursday: arrayOfActions,
    Friday: arrayOfActions,
    Saturday: arrayOfActions,
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
