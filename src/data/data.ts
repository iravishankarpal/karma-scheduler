import { tDay } from "@/schema/names";

const data = {
    Birth_Nakshatra: [
        { Nakshatra: "Aswini", Suklapaksha: "Vulture", Krishnapaksha: "Peacock" },
        { Nakshatra: "Bharani", Suklapaksha: "Vulture", Krishnapaksha: "Peacock" },
        { Nakshatra: "Krittika", Suklapaksha: "Vulture", Krishnapaksha: "Peacock" },
        { Nakshatra: "Rohini", Suklapaksha: "Vulture", Krishnapaksha: "Peacock" },
        { Nakshatra: "Mrigasira", Suklapaksha: "Vulture", Krishnapaksha: "Peacock" },
        { Nakshatra: "Ardra", Suklapaksha: "Owl", Krishnapaksha: "Cock" },
        { Nakshatra: "Punarvasu", Suklapaksha: "Owl", Krishnapaksha: "Cock" },
        { Nakshatra: "Pushya", Suklapaksha: "Owl", Krishnapaksha: "Cock" },
        { Nakshatra: "Ashlesha", Suklapaksha: "Owl", Krishnapaksha: "Cock" },
        { Nakshatra: "Makha", Suklapaksha: "Owl", Krishnapaksha: "Cock" },
        { Nakshatra: "Purvaphalguni", Suklapaksha: "Owl", Krishnapaksha: "Cock" },
        { Nakshatra: "Uttaraphalguni", Suklapaksha: "Crow", Krishnapaksha: "Crow" },
        { Nakshatra: "Hasta", Suklapaksha: "Crow", Krishnapaksha: "Crow" },
        { Nakshatra: "Chitra", Suklapaksha: "Crow", Krishnapaksha: "Crow" },
        { Nakshatra: "Swati", Suklapaksha: "Crow", Krishnapaksha: "Crow" },
        { Nakshatra: "Vishakha", Suklapaksha: "Crow", Krishnapaksha: "Crow" },
        { Nakshatra: "Anuradha", Suklapaksha: "Cock", Krishnapaksha: "Owl" },
        { Nakshatra: "Jyeshta", Suklapaksha: "Cock", Krishnapaksha: "Owl" },
        { Nakshatra: "Moola", Suklapaksha: "Cock", Krishnapaksha: "Owl" },
        { Nakshatra: "Poorvashada", Suklapaksha: "Cock", Krishnapaksha: "Owl" },
        { Nakshatra: "Uttarashada", Suklapaksha: "Cock", Krishnapaksha: "Owl" },
        { Nakshatra: "Shravana", Suklapaksha: "Peacock", Krishnapaksha: "Vulture" },
        { Nakshatra: "Dhanishta", Suklapaksha: "Peacock", Krishnapaksha: "Vulture" },
        { Nakshatra: "Satabhisha", Suklapaksha: "Peacock", Krishnapaksha: "Vulture" },
        { Nakshatra: "Poorvabhadra", Suklapaksha: "Peacock", Krishnapaksha: "Vulture" },
        { Nakshatra: "Uttarabhadra", Suklapaksha: "Peacock", Krishnapaksha: "Vulture" },
        { Nakshatra: "Revati", Suklapaksha: "Peacock", Krishnapaksha: "Vulture" },
    ],

    Pakshi_Ruling_Days: {
        Suklapaksha: {
            Vulture: {
                Friend: ["Peacock", "Owl"],
                Enemy: ["Crow", "Cock"],
                Death_Days: ["Thursday", "Saturday"],
                Day_time: ["Sunday", "Tuesday"],
                Night_time: ["Friday"],
            },
            Owl: {
                Friend: ["Vulture", "Crow"],
                Enemy: ["Peacock", "Cock"],
                Death_Days: ["Sunday", "Friday"],
                Day_time: ["Monday", "Wednesday"],
                Night_time: ["Saturday"],
            },
            Crow: {
                Friend: ["Owl", "Cock"],
                Enemy: ["Vulture", "Peacock"],
                Death_Days: ["Monday"],
                Day_time: ["Thursday"],
                Night_time: ["Sunday", "Tuesday"],
            },
            Cock: {
                Friend: ["Peacock", "Crow"],
                Enemy: ["Vulture", "Owl"],
                Death_Days: ["Tuesday"],
                Day_time: ["Friday"],
                Night_time: ["Monday", "Wednesday"],
            },
            Peacock: {
                Friend: ["Vulture", "Cock"],
                Enemy: ["Owl", "Crow"],
                Death_Days: ["Wednesday"],
                Day_time: ["Saturday"],
                Night_time: ["Thursday"],
            },
        },
        Krishnapaksha: {
            Vulture: {
                Friend: ["Peacock", "Crow"],
                Enemy: ["Owl", "Crow"],
                Death_Days: ["Tuesday"],
                Day_time: ["Friday"],
                Night_time: ["Sunday", "Tuesday"],
            },
            Owl: {
                Friend: ["Cock", "Crow"],
                Enemy: ["Vulture", "Peacock"],
                Death_Days: ["Monday"],
                Day_time: ["Thursday"],
                Night_time: ["Wednesday"],
            },
            Crow: {
                Friend: ["Owl", "Vulture"],
                Enemy: ["Peacock", "Cock"],
                Death_Days: ["Sunday"],
                Day_time: ["Wednesday"],
                Night_time: ["Thursday"],
            },
            Cock: {
                Friend: ["Peacock", "Owl"],
                Enemy: ["Crow", "Vulture"],
                Death_Days: ["Thursday", "Saturday"],
                Day_time: ["Sunday", "Tuesday"],
                Night_time: ["Monday", "Saturday"],
            },
            Peacock: {
                Friend: ["Vulture", "Cock"],
                Enemy: ["Owl", "Crow"],
                Death_Days: ["Wednesday", "Friday"],
                Day_time: ["Monday", "Saturday"],
                Night_time: ["Friday"],
            },
        },
    },

    Pakshi_Daily_Activity: {
        Cock: {
            Suklapaksha: {
                Day_time: {
                    Sunday: ["Sleep", "Death", "Eat", "Walk", "Rule"],
                    Monday: ["Rule", "Sleep", "Death", "Eat", "Walk"],
                    Tuesday: ["Sleep", "Death", "Eat", "Walk", "Rule"],
                    Wednesday: ["Rule", "Sleep", "Death", "Eat", "Walk"],
                    Thursday: ["Walk", "Rule", "Sleep", "Death", "Eat"],
                    Friday: ["Eat", "Walk", "Rule", "Sleep", "Death"],
                    Saturday: ["Death", "Eat", "Walk", "Rule", "Sleep"],
                },
                Night_time: {
                    Sunday: ["Sleep", "Eat", "Rule", "Death", "Walk"],
                    Monday: ["Eat", "Rule", "Death", "Walk", "Sleep"],
                    Tuesday: ["Sleep", "Eat", "Rule", "Death", "Walk"],
                    Wednesday: ["Eat", "Rule", "Death", "Walk", "Sleep"],
                    Thursday: ["Rule", "Death", "Walk", "Sleep", "Eat"],
                    Friday: ["Death", "Walk", "Sleep", "Eat", "Rule"],
                    Saturday: ["Walk", "Sleep", "Eat", "Rule", "Death"],
                },
            },
            Krishnapaksha: {
                Day_time: {
                    Sunday: ["Walk", "Death", "Rule", "Sleep", "Walk"],
                    Monday: ["Rule", "Walk", "Eat", "Death", "Sleep"],
                    Tuesday: ["Eat", "Death", "Sleep", "Rule", "Walk"],
                    Wednesday: ["Sleep", "Rule", "Walk", "Eat", "Death"],
                    Thursday: ["Walk", "Eat", "Death", "Sleep", "Rule"],
                    Friday: ["Death", "Sleep", "Rule", "Walk", "Eat"],
                    Saturday: ["Rule", "Walk", "Eat", "Death", "Sleep"],
                },
                Night_time: {
                    Sunday: ["Walk", "Death", "Sleep", "Walk", "Sleep"],
                    Monday: ["Eat", "Sleep", "Walk", "Death", "Rule"],
                    Tuesday: ["Walk", "Death", "Rule", "Eat", "Sleep"],
                    Wednesday: ["Death", "Rule", "Eat", "Sleep", "Walk"],
                    Thursday: ["Rule", "Eat", "Sleep", "Walk", "Death"],
                    Friday: ["Sleep", "Walk", "Death", "Rule", "Eat"],
                    Saturday: ["Eat", "Sleep", "Walk", "Death", "Rule"],
                },
            },
        },
        Peacock: {
            Suklapaksha: {
                Day_time: {
                    Sunday: ["Death", "Eat", "Walk", "Rule", "Sleep"],
                    Monday: ["Sleep", "Death", "Eat", "Walk", "Rule"],
                    Tuesday: ["Death", "Eat", "Walk", "Rule", "Sleep"],
                    Wednesday: ["Sleep", "Death", "Eat", "Walk", "Rule"],
                    Thursday: ["Rule", "Sleep", "Death", "Eat", "Walk"],
                    Friday: ["Walk", "Rule", "Sleep", "Death", "Eat"],
                    Saturday: ["Eat", "Walk", "Rule", "Sleep", "Death"],
                },
                Night_time: {
                    Sunday: ["Walk", "Sleep", "Eat", "Rule", "Death"],
                    Monday: ["Sleep", "Eat", "Rule", "Death", "Walk"],
                    Tuesday: ["Walk", "Sleep", "Eat", "Rule", "Death"],
                    Wednesday: ["Sleep", "Eat", "Rule", "Death", "Walk"],
                    Thursday: ["Eat", "Rule", "Death", "Walk", "Sleep"],
                    Friday: ["Rule", "Death", "Walk", "Sleep", "Eat"],
                    Saturday: ["Death", "Walk", "Sleep", "Eat", "Rule"],
                },
            },
            Krishnapaksha: {
                Day_time: {
                    Sunday: ["Sleep", "Rule", "Walk", "Eat", "Death"],
                    Monday: ["Eat", "Death", "Sleep", "Rule", "Walk"],
                    Tuesday: ["Sleep", "Rule", "Walk", "Eat", "Death"],
                    Wednesday: ["Walk", "Eat", "Death", "Sleep", "Rule"],
                    Thursday: ["Death", "Sleep", "Rule", "Walk", "Eat"],
                    Friday: ["Rule", "Walk", "Eat", "Death", "Sleep"],
                    Saturday: ["Eat", "Death", "Sleep", "Rule", "Walk"],
                },
                Night_time: {
                    Sunday: ["Sleep", "Walk", "Death", "Rule", "Eat"],
                    Monday: ["Rule", "Eat", "Sleep", "Walk", "Death"],
                    Tuesday: ["Sleep", "Walk", "Death", "Rule", "Eat"],
                    Wednesday: ["Walk", "Death", "Rule", "Eat", "Sleep"],
                    Thursday: ["Death", "Rule", "Eat", "Sleep", "Walk"],
                    Friday: ["Eat", "Sleep", "Walk", "Death", "Rule"],
                    Saturday: ["Rule", "Eat", "Sleep", "Walk", "Death"],
                },
            },
        },
        Owl: {
            Suklapaksha: {
                Day_time: {
                    Sunday: ["Walk", "Rule", "Sleep", "Death", "Eat"],
                    Monday: ["Eat", "Walk", "Rule", "Sleep", "Death"],
                    Tuesday: ["Walk", "Rule", "Sleep", "Death", "Eat"],
                    Wednesday: ["Eat", "Walk", "Rule", "Sleep", "Death"],
                    Thursday: ["Death", "Eat", "Walk", "Rule", "Sleep"],
                    Friday: ["Sleep", "Death", "Eat", "Walk", "Rule"],
                    Saturday: ["Rule", "Sleep", "Death", "Eat", "Walk"],
                },
                Night_time: {
                    Sunday: ["Death", "Walk", "Sleep", "Eat", "Rule"],
                    Monday: ["Death", "Walk", "Sleep", "Eat", "Rule"],
                    Tuesday: ["Rule", "Death", "Walk", "Sleep", "Eat"],
                    Wednesday: ["Death", "Walk", "Sleep", "Eat", "Rule"],
                    Thursday: ["Walk", "Sleep", "Eat", "Rule", "Death"],
                    Friday: ["Sleep", "Eat", "Rule", "Death", "Walk"],
                    Saturday: ["Eat", "Rule", "Death", "Walk", "Sleep"],
                },
            },
            Krishnapaksha: {
                Day_time: {
                    Sunday: ["Death", "Sleep", "Rule", "Walk", "Eat"],
                    Monday: ["Walk", "Eat", "Death", "Sleep", "Rule"],
                    Tuesday: ["Death", "Sleep", "Rule", "Walk", "Eat"],
                    Wednesday: ["Rule", "Walk", "Eat", "Death", "Sleep"],
                    Thursday: ["Eat", "Death", "Sleep", "Rule", "Walk"],
                    Friday: ["Sleep", "Rule", "Walk", "Eat", "Death"],
                    Saturday: ["Walk", "Eat", "Death", "Sleep", "Rule"],
                },
                Night_time: {
                    Sunday: ["Rule", "Eat", "Sleep", "Walk", "Death"],
                    Monday: ["Walk", "Death", "Rule", "Eat", "Sleep"],
                    Tuesday: ["Rule", "Eat", "Sleep", "Walk", "Death"],
                    Wednesday: ["Eat", "Sleep", "Walk", "Death", "Rule"],
                    Thursday: ["Sleep", "Walk", "Death", "Rule", "Eat"],
                    Friday: ["Death", "Rule", "Eat", "Sleep", "Walk"],
                    Saturday: ["Walk", "Death", "Rule", "Eat", "Sleep"],
                },
            },
        },
        Vulture: {
            Suklapaksha: {
                Day_time: {
                    Sunday: ["Eat", "Walk", "Rule", "Sleep", "Death"],
                    Monday: ["Death", "Eat", "Walk", "Rule", "Sleep", "Death"],
                    Tuesday: ["Eat", "Walk", "Rule", "Sleep", "Death"],
                    Wednesday: ["Death", "Eat", "Walk", "Rule", "Sleep"],
                    Thursday: ["Sleep", "Death", "Eat", "Walk", "Rule"],
                    Friday: ["Rule", "Sleep", "Death", "Eat", "Walk"],
                    Saturday: ["Walk", "Rule", "Sleep", "Death", "Eat"],
                },
                Night_time: {
                    Sunday: ["Death", "Walk", "Sleep", "Eat", "Rule"],
                    Monday: ["Walk", "Sleep", "Eat", "Rule", "Death"],
                    Tuesday: ["Walk", "Sleep", "Eat", "Rule", "Death"],
                    Wednesday: ["Sleep", "Eat", "Rule", "Death", "Walk"],
                    Thursday: ["Eat", "Rule", "Death", "Walk", "Sleep"],
                    Friday: ["Eat", "Rule", "Death", "Walk", "Sleep"],
                    Saturday: ["Rule", "Death", "Walk", "Sleep", "Eat"],
                },
            },
            Krishnapaksha: {
                Day_time: {
                    Sunday: ["Walk", "Eat", "Death", "Sleep", "Rule"],
                    Monday: ["Sleep", "Rule", "Walk", "Eat", "Death"],
                    Tuesday: ["Walk", "Eat", "Death", "Sleep", "Rule"],
                    Wednesday: ["Death", "Sleep", "Rule", "Walk", "Eat"],
                    Thursday: ["Rule", "Walk", "Eat", "Death", "Sleep"],
                    Friday: ["Eat", "Death", "Sleep", "Rule", "Walk"],
                    Saturday: ["Sleep", "Rule", "Walk", "Eat", "Death"],
                },
                Night_time: {
                    Sunday: ["Eat", "Sleep", "Walk", "Death", "Rule"],
                    Monday: ["Death", "Rule", "Eat", "Sleep", "Walk"],
                    Tuesday: ["Eat", "Sleep", "Walk", "Death", "Rule"],
                    Wednesday: ["Sleep", "Walk", "Death", "Rule", "Eat"],
                    Thursday: ["Walk", "Death", "Rule", "Eat", "Sleep"],
                    Friday: ["Rule", "Eat", "Sleep", "Walk", "Death"],
                    Saturday: ["Death", "Rule", "Eat", "Sleep", "Walk"],
                },
            },
        },
        Crow: {
            Suklapaksha: {
                Day_time: {
                    Sunday: ["Rule", "Sleep", "Death", "Eat", "Walk"],
                    Monday: ["Walk", "Rule", "Sleep", "Death", "Eat"],
                    Tuesday: ["Rule", "Sleep", "Death", "Eat", "Walk"],
                    Wednesday: ["Walk", "Rule", "Sleep", "Death", "Eat"],
                    Thursday: ["Eat", "Walk", "Rule", "Sleep", "Death"],
                    Friday: ["Death", "Eat", "Walk", "Rule", "Sleep"],
                    Saturday: ["Sleep", "Death", "Eat", "Walk", "Rule"],
                },
                Night_time: {
                    Sunday: ["Eat", "Rule", "Death", "Walk", "Sleep"],
                    Monday: ["Rule", "Death", "Walk", "Sleep", "Eat"],
                    Tuesday: ["Eat", "Rule", "Death", "Walk", "Sleep"],
                    Wednesday: ["Rule", "Death", "Walk", "Sleep", "Eat"],
                    Thursday: ["Death", "Walk", "Sleep", "Eat", "Rule"],
                    Friday: ["Walk", "Sleep", "Eat", "Rule", "Death"],
                    Saturday: ["Sleep", "Eat", "Rule", "Death", "Walk"],
                },
                day(day: tDay) {
                    return this.Day_time[day].concat(this.Night_time[day]);
                },
            },
            Krishnapaksha: {
                Day_time: {
                    Sunday: ["Rule", "Walk", "Eat", "Death", "Sleep"],
                    Monday: ["Death", "Sleep", "Rule", "Walk", "Eat"],
                    Tuesday: ["Rule", "Walk", "Eat", "Death", "Sleep"],
                    Wednesday: ["Eat", "Death", "Sleep", "Rule", "Walk"],
                    Thursday: ["Sleep", "Rule", "Walk", "Eat", "Death"],
                    Friday: ["Walk", "Eat", "Death", "Sleep", "Rule"],
                    Saturday: ["Death", "Sleep", "Rule", "Walk", "Eat"],
                },
                Night_time: {
                    Sunday: ["Death", "Rule", "Eat", "Sleep", "Walk"],
                    Monday: ["Sleep", "Walk", "Death", "Rule", "Eat"],
                    Tuesday: ["Death", "Rule", "Eat", "Sleep", "Walk"],
                    Wednesday: ["Rule", "Eat", "Sleep", "Walk", "Death"],
                    Thursday: ["Eat", "Sleep", "Walk", "Death", "Rule"],
                    Friday: ["Walk", "Death", "Rule", "Eat", "Sleep"],
                    Saturday: ["Sleep", "Walk", "Death", "Rule", "Eat"],
                },
                day(day: tDay) {
                    return this.Day_time[day].concat(this.Night_time[day]);
                },
            },
        },
    },
};

export default data;
