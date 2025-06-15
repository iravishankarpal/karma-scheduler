"use client";
import data from "@/data/data";
import { mainDataSchema } from "@/schema/data";
import { useBirdsInfo } from "@/store/useSchedulerStore";
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { daysArray } from "@/schema/names";
export default function BirdDetail() {
    const { bird, paksha } = useBirdsInfo();
    const allData = mainDataSchema.parse(data); // make sure `data` is imported

    const dayActivities = allData.Pakshi_Daily_Activity?.[bird]?.[paksha];

    // If data is missing, show fallback
    if (!dayActivities) {
        return <div className="text-red-500">No activity data available.</div>;
    }
    const dayTime = dayActivities.Day_time;
    const nightTime = dayActivities.Night_time;

    return (
        <div className="min-h-screen/3">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Day</TableHead>
                        <TableHead>Day Activities</TableHead>
                        <TableHead>Night Activities</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {daysArray.map((day) => (
                        <TableRow key={day}>
                            <TableCell>{day}</TableCell>
                            <TableCell>{dayTime[day].join(", ")}</TableCell>
                            <TableCell>{nightTime[day]?.join(", ") || "-"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
