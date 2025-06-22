"use client";
import data from "@/data/data";
import { mainDataSchema } from "@/schema/data";
import { useBirdsInfo } from "@/store/useSchedulerStore";
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { names, tActivity } from "@/schema/names";
import { getWeekDaysFrom } from "@/logic/time/weekdays";
import { getTimeDivision } from "@/logic/time/timedivistion";
import clsx from "clsx";
export default function BirdDetail() {
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

    return (
        <div className="min-h-screen/3">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Time / Day</TableHead>
                        {weekdays.map((day) => (
                            <TableHead key={day.label}>{day.label}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {timeSlots.fullDay.map((slot, index) => (
                        <TableRow key={index}>
                            <TableCell>{`${slot.startTime} - ${slot.endTime}`}</TableCell>
                            {weekdays.map((day) => {
                                const activity = index < 5 ? dayTime[day.label][index] : nightTime[day.label][index - 5];
                                return (
                                    <TableCell key={day.label}>
                                        <ActivityColor activity={activity} />
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

const activityColors: Record<tActivity, string> = {
    [names.activities.Rule]: "bg-green-600", // Powerful, auspicious
    [names.activities.Eat]: "bg-lime-400", // Productive, energetic
    [names.activities.Walk]: "bg-amber-200", // Moving, moderate energy
    [names.activities.Sleep]: "bg-gray-300", // Resting, passive
    [names.activities.Death]: "bg-neutral-100", // Inauspicious, amber
};

export function ActivityColor({ activity }: { activity: tActivity }) {
    const dotColor = activityColors[activity] || "bg-gray-200";

    return (
        <div className="flex items-center space-x-2">
            <span className={clsx("inline-block w-2.5 h-2.5 rounded-full", dotColor)} />
            <span className="text-sm">{activity}</span>
        </div>
    );
}
