import data from "@/data/data";
import React from "react";

export default function page() {
    const info = data.Pakshi_Daily_Activity.Crow.Krishnapaksha.day("Monday");

    return <div>{JSON.stringify(info)}</div>;
}
