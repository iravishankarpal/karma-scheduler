import { getCurrentPakshiActivity } from "@/logic/time/currentActivity";
import { useBirdsInfo } from "@/store/useSchedulerStore";
import React from "react";

export default function BirdCurrentActivity() {
    const { bird: pakshi, paksha, sunrise, sunset } = useBirdsInfo();

    const CurrentActivity = getCurrentPakshiActivity({
        sunrise,
        sunset,
        pakshi,
        paksha,
    });
    if (!CurrentActivity) {
        return <div className="text-red-500">No activity data available for the current time.</div>;
    }
    const { activity, from, to } = CurrentActivity;

    return (
        <span className="flex  justify-between items-center  ">
            <p className="font-bold"> {activity}</p>
            <p className="text-xs">
                {from}
                <br />
                {to}
            </p>
        </span>
    );
}
