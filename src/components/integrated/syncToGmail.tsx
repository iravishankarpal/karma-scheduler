"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { mainDataSchema } from "@/schema/data";
import data from "@/data/data";
import { useBirdsInfo } from "@/store/useSchedulerStore";
import { getWeekDaysFrom } from "@/logic/time/weekdays";
import { getTimeDivision } from "@/logic/time/timedivistion";

export default function SyncToGmail() {
    const { bird, paksha, sunrise, sunset, date } = useBirdsInfo();
    const allData = mainDataSchema.parse(data);

    const dayActivities = allData.Pakshi_Daily_Activity?.[bird]?.[paksha];
    if (!dayActivities) {
        return <div className="text-red-500">No activity data available.</div>;
    }

    const dayTime = dayActivities.Day_time;
    const nightTime = dayActivities.Night_time;
    const weekdays = getWeekDaysFrom(new Date(date));
    const timeSlots = getTimeDivision(sunrise, sunset);
    let getFullActivities = (day) => {
        return timeSlots.fullDay.map((slot, index) => {
            const activity = index < 5 ? dayTime[day.label][index] : nightTime[day.label][index - 5];
            return {
                time: `${slot.startTime} - ${slot.endTime}`,
                activity: activity,
                day: day.label,
            };
        });
    };
    let onClickHandler = () => {
        let fullActivities = weekdays.flatMap(getFullActivities);
        let dayActivities = fullActivities.reduce((acc, curr) => {
            if (!acc[curr.day]) {
                acc[curr.day] = [];
            }
            acc[curr.day].push(curr);
            return acc;
        }, {});

        console.log(Object.values(dayActivities));
    };
    return (
        <div>
            <Button className="mt-4" onClick={onClickHandler} size={"sm"} variant={"outline"}>
                Sync to google calendar
            </Button>
        </div>
    );
}
