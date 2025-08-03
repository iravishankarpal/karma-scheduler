import { google } from "googleapis";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { getColorIdForActivity } from "@/data/main";
import { ActivitySchema } from "@/schema/names";

const calendarId =
    "43a90012acaf3c24f87c10dcbae07df67f79f4e63fcc2d7bc2fb7cac47983684@group.calendar.google.com";

export const daySchema = z.array(
    z.object({
        startDateTime: z.string(),
        endDateTime: z.string(),
        Event: ActivitySchema,
    })
);
export type tDayActivities = z.infer<typeof daySchema>;

export async function syncToCalendar(DayActivities: tDayActivities) {
    try {
        DayActivities = daySchema.parse(DayActivities);

        const CREDENTIALS_PATH = path.join(process.cwd(), "config/credentials.json");
        const credentials = JSON.parse(await fs.readFile(CREDENTIALS_PATH, "utf-8"));

        const scopes = ["https://www.googleapis.com/auth/calendar"];
        const fixedKey = credentials.private_key.replace(/\\n/g, "\n");
        const auth = new google.auth.JWT({
            email: credentials.client_email,
            key: fixedKey,
            scopes,
        });

        await auth.authorize();
        const calendar = google.calendar({ version: "v3", auth });

        for (const activity of DayActivities) {
            const event = {
                summary: activity.Event,
                start: {
                    dateTime: activity.startDateTime,
                    timeZone: "Asia/Kolkata",
                },
                end: {
                    dateTime: activity.endDateTime,
                    timeZone: "Asia/Kolkata",
                },
                colorId: getColorIdForActivity(activity.Event),
            };
            await calendar.events.insert({
                calendarId: calendarId,
                requestBody: event,
            });
        }
        return "Activities synced to calendar successfully.";
    } catch (error: Error | unknown) {
        console.error(error);
        throw new Error("Failed to sync to calendar: " + (error as Error).message);
    }
}
