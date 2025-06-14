import { z } from "zod";
export const values = {
    birds: {
        Crow: "Crow",
        Vulture: "Vulture",
        Owl: "Owl",
        Peacock: "Peacock",
        Cock: "Cock",
    },
    paksha: {
        Shukla: "Shukla",
        Krishna: "Krishna",
    },
};
export const birds = ["Crow", "Vulture", "Owl", "Peacock", "Cock"] as const;

export const BirdSchema = z.enum(birds);

export type Bird = z.infer<typeof BirdSchema>;

export const pakshaStatus = ["Shukla", "Krishna"] as const;

export type Paksha = z.infer<typeof BirdSchema>;

export const PakshaSchema = z.enum(pakshaStatus);

export type PakshaStatus = z.infer<typeof PakshaSchema>;
