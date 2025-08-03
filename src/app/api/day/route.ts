// import ipInfo from "@/lib/axios/ipinfo";

import { getFullDayActivityController } from "@/controller/sync";

export const dynamic = "force-dynamic"; // This ensures the route is always fresh and not cached

export const revalidate = 0; // Disable revalidation for this route

export async function GET(request: Request) {
    const fullDay = await getFullDayActivityController(request);
    return new Response(JSON.stringify(fullDay), {
        headers: { "Content-Type": "application/json" },
    });
}
