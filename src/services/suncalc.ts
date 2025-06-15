const SunCalc = require("suncalc");

export function getMoonPhase(date: Date): "Waxing" | "Waning" {
    let phaseData = SunCalc.getMoonIllumination(date);
    let phase = phaseData.phase;
    if (phase < 0.5) return "Waxing";
    else return "Waning";
}
