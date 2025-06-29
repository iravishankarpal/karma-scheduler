import { NextResponse } from "next/server";

export function GET() {
    const res = {
        message: "Hello from Karma Scheduler API",
        status: "success",
        timestamp: new Date().toISOString(),
    };
    return new NextResponse(JSON.stringify(res), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
