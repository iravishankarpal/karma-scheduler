import { daySchema, syncToCalendar } from "../syncToCalender";
import { getFullDayActivityController } from "../route";

export const dynamic = "force-dynamic";

export const revalidate = 0;

export async function GET(request: Request) {
    const jsonTemp = await getFullDayActivityController(request);
    await syncToCalendar(jsonTemp.fullDay);
    return new Response(
        JSON.stringify({
            ...jsonTemp,
        }),
        {
            headers: { "Content-Type": "application/json" },
        }
    );
}
