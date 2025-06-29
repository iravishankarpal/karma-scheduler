import { names, tPakshaStatus } from "@/schema/names";
import SunCalc from "suncalc";
// const SunCalc = require("suncalc");

export function getMoonPhase(date: Date): "Waxing" | "Waning" {
    const phaseData = SunCalc.getMoonIllumination(date);
    const phase = phaseData.phase;
    if (phase < 0.5) return "Waxing";
    else return "Waning";
}

export function getMoonIllumination(date: Date): number {
    const phaseData = SunCalc.getMoonIllumination(date);
    return phaseData.illumination;
}

export function getMoonAge(date: Date): number {
    const phaseData = SunCalc.getMoonIllumination(date);
    return phaseData.age;
}

export function getPakshaStatus(date: Date): tPakshaStatus {
    const phaseData = getMoonPhase(date);
    if (phaseData === "Waxing") return names.paksha.Suklapaksha;
    else return names.paksha.Krishnapaksha;
}
