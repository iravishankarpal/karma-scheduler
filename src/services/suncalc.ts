import { names, tPakshaStatus } from "@/schema/names";

const SunCalc = require("suncalc");

export function getMoonPhase(date: Date): "Waxing" | "Waning" {
    let phaseData = SunCalc.getMoonIllumination(date);
    let phase = phaseData.phase;
    if (phase < 0.5) return "Waxing";
    else return "Waning";
}

export function getMoonIllumination(date: Date): number {
    let phaseData = SunCalc.getMoonIllumination(date);
    return phaseData.illumination;
}

export function getMoonAge(date: Date): number {
    let phaseData = SunCalc.getMoonIllumination(date);
    return phaseData.age;
}

export function getPakshaStatus(date: Date): tPakshaStatus {
    let phaseData = getMoonPhase(date);
    if (phaseData === "Waxing") return names.paksha.Suklapaksha;
    else return names.paksha.Krishnapaksha;
}
