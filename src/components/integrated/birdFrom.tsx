"use client";

import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
    useBirdActions,
    //  useBirdHydration,
    useBirdsInfo,
} from "@/store/useSchedulerStore";
import { birdsArray } from "@/schema/names";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
// import BirdCurrentActivity from "./birdCurrentActivity";
import { ModeToggle } from "../them-swither-btn";
// import SyncToGmail from "./syncToGmail";

export default function BirdFormProvider() {
    // const hasHydrated = useBirdHydration();
    // if (!hasHydrated) return null;
    return <BirdForm />;
}

export function BirdForm() {
    const { date, bird, paksha, sunrise, sunset } = useBirdsInfo();
    const { setDate, setBird, setSunrise, setSunset } = useBirdActions();

    return (
        <div className="space-y-4 flex-1/5 flex gap-2  mx-auto">
            {/* Date Picker */}
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">
                    Select Date <span className="text-xs">({paksha})</span>{" "}
                </label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start text-left")}>
                            {format(date, "EEEE, PPP")}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={(d) => d && setDate(d)} />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="flex flex-col space-y-2">
                <Label htmlFor="sunrise" className="text-sm font-medium">
                    Set Sunrise
                </Label>
                <Input
                    id="sunrise"
                    onChange={(e) => setSunrise(e.target.value)}
                    type="time"
                    defaultValue={sunrise}
                    className="w-full"
                />
            </div>
            {/* Sunset */}
            <div className="flex flex-col space-y-2">
                <Label htmlFor="sunset" className="text-sm font-medium">
                    Set Sunset
                </Label>
                <Input
                    id="sunset"
                    type="time"
                    onChange={(e) => setSunset(e.target.value)}
                    defaultValue={sunset}
                    className="w-full"
                />
            </div>
            {/* Bird Select */}
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Select Bird</label>
                <Select value={bird} onValueChange={setBird}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select bird" />
                    </SelectTrigger>
                    <SelectContent>
                        {birdsArray.map((b) => (
                            <SelectItem key={b} value={b}>
                                {b}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            {/* <div className="flex flex-col space-y-2  ">
                <label className="text-sm font-medium">Current Activity</label>
                <BirdCurrentActivity />
            </div> */}
            {/* <SyncToGmail /> */}
            <ModeToggle />
        </div>
    );
}
