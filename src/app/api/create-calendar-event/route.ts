import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { promises as fs } from "fs";
import path from "path";

export async function GET(req: NextRequest) {
    try {
        console.clear();

        const CREDENTIALS_PATH = path.join(process.cwd(), "config/credentials.json");
        const credentials = JSON.parse(await fs.readFile(CREDENTIALS_PATH, "utf-8"));

        if (!credentials.client_email || !credentials.private_key) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
        }

        const scopes = ["https://www.googleapis.com/auth/calendar"];
        const fixedKey = credentials.private_key.replace(/\\n/g, "\n");
        const auth = new google.auth.JWT({
            email: credentials.client_email,
            key: fixedKey,
            scopes,
        });

        await auth.authorize();

        // return NextResponse.json({ message: "Credentials loaded successfully" });
        const event = {
            summary: "Team Sync Meeting",
            description: "Weekly sync to discuss project progress and blockers.",
            start: {
                dateTime: "2025-08-03T11:00:00+05:30",
                timeZone: "Asia/Kolkata",
            },
            end: {
                dateTime: "2025-08-03T12:00:00+05:30",
                timeZone: "Asia/Kolkata",
            },
            colorId: "5",
        };
        let calendarId =
            "43a90012acaf3c24f87c10dcbae07df67f79f4e63fcc2d7bc2fb7cac47983684@group.calendar.google.com";
        const calendar = google.calendar({ version: "v3", auth });
        const response = await calendar.events.insert({
            calendarId:
                "43a90012acaf3c24f87c10dcbae07df67f79f4e63fcc2d7bc2fb7cac47983684@group.calendar.google.com",
            requestBody: event,
        });

        return NextResponse.json({ eventLink: [response.data.htmlLink] });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}
