import { tActivity } from "@/schema/names";

export const colors = [
    { colorId: "1", name: "Lavender" },
    { colorId: "2", name: "Sage" },
    { colorId: "3", name: "Grape" },
    { colorId: "4", name: "Flamingo" },
    { colorId: "5", name: "Banana" },
    { colorId: "6", name: "Tangerine" },
    { colorId: "7", name: "Peacock" },
    { colorId: "8", name: "Graphite" },
    { colorId: "9", name: "Blueberry" },
    { colorId: "10", name: "Basil" },
    { colorId: "11", name: "Tomato" },
];

export const getColorForActivity = (activity: tActivity): string => {
    const activityColorMap: Record<tActivity, string> = {
        Rule: "Basil",
        Eat: "Sage",
        Walk: "Lavender",
        Sleep: "Flamingo",
        Death: "Tomato",
    };
    return activityColorMap[activity] || "Banana";
};
export const getColorIdForActivity = (activity: tActivity): string => {
    const activityColorIdMap: Record<tActivity, string> = {
        Rule: "5",
        Eat: "2",
        Walk: "1",
        Sleep: "4",
        Death: "11",
    };
    return activityColorIdMap[activity] || "5";
};
