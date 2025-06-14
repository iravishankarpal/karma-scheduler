const { planetposition } = require("astronomia");
const date = new Date("2025-06-14T20:41:00"); // Example date & time

export function planetDetails(date: Date) {
    const earth = planetposition.earth();
    const mars = planetposition.mars();
    console.log("mars :", mars);
    console.log(`Earth RA: ${earth.ra}, Declination: ${earth.dec}`, earth);
    console.log(`Mars RA: ${mars.ra}, Declination: ${mars.dec}`);
}
