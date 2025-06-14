"use client";

import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useBirdActions, useBirdHydration, useBirdsInfo } from "@/store/useSchedulerStore";

const birdOptions = ["Crow", "Vulture", "Owl", "Peacock", "Cock"];

export default function BirdFormProvider() {
    let hasHydrated = useBirdHydration();
    if (!hasHydrated) return null;
    return <BirdForm />;
}

export function BirdForm() {
    const { date, bird } = useBirdsInfo();
    const { setDate, setBird } = useBirdActions();

    return (
        <div className="space-y-4 max-w-sm mx-auto">
            {/* Date Picker */}
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Select Date</label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start text-left")}>
                            {format(date, "PPP")}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={(d) => d && setDate(d)} />
                    </PopoverContent>
                </Popover>
            </div>

            {/* Bird Select */}
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Select Bird</label>
                <Select value={bird} onValueChange={setBird}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select bird" />
                    </SelectTrigger>
                    <SelectContent>
                        {birdOptions.map((b) => (
                            <SelectItem key={b} value={b}>
                                {b}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
