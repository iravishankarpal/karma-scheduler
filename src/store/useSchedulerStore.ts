// store/useSchedulerStore.ts
import { create } from "zustand";
import { useShallow } from "zustand/shallow";
import {
    devtools,
    // persist
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { StateCreator } from "zustand";
import type { PersistOptions } from "zustand/middleware";
import { BirdSchema, names, tBird, tPakshaStatus } from "@/schema/names";
import { getPakshaStatus } from "@/services/suncalc";
// const myMiddlewares = (f) => devtools(persist(immer(f), { name: "reference" }));
interface State {
    hasHydrated: boolean;
    date: Date;
    bird: tBird;
    paksha: tPakshaStatus;
    sunrise: string; // e.g. "06:00"
    sunset: string; // e.g. "18:00"
    setDate: (d: Date) => void;
    setBird: (b: string) => void;
    setSunrise: (time: string) => void; // e.g. "06:00"
    setSunset: (time: string) => void; // e.g. "18
}

// 🧠 Step 1: type for middleware combo
type MyState = State;
type MiddlewareStack = [["zustand/immer", never], ["zustand/devtools", never], ["zustand/persist", Partial<PersistOptions<MyState>>]];

// type MiddlewareStack = [["zustand/immer", never], ["zustand/devtools", Partial<MyState>]];

// 🧩 Step 2: Typed custom middleware
const withMiddlewares = (f: StateCreator<MyState, MiddlewareStack>) =>
    devtools(
        // @ts-expect-error No overload matches this call
        // persist(immer(f), {
        //     name: "scheduler", // for localStorage key
        //     onRehydrateStorage: () => (state: MyState) => {
        //         console.log("✅ Zustand rehydrated!", state);
        //         if (state) {
        //             state.hasHydrated = true;
        //             return state;
        //         }
        //     },
        // })
        immer(f)
    );

// ✅ Final store with typed middleware stack
export const useSchedulerStore = create<MyState>()(
    withMiddlewares((set) => ({
        hasHydrated: true,
        date: new Date(),
        bird: names.birds.Crow,
        paksha: getPakshaStatus(new Date()),
        sunrise: "06:00",
        sunset: "18:00",

        setDate: (date) => {
            set((state) => {
                state.date = date;
                state.paksha = getPakshaStatus(date);
            });
        },
        setBird: (b) => {
            set((state) => {
                state.bird = BirdSchema.parse(b);
            });
        },
        setSunrise: (time: string) => {
            // Validate time format (HH:mm)
            const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
            if (!timeRegex.test(time)) {
                throw new Error("Invalid time format. Please use HH:mm format.");
            }
            set((state) => {
                state.sunrise = time;
            });
        },
        setSunset: (time: string) => {
            // Validate time format (HH:mm)
            const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
            if (!timeRegex.test(time)) {
                throw new Error("Invalid time format. Please use HH:mm format.");
            }
            set((state) => {
                state.sunset = time;
            });
        },
    }))
);

export default useSchedulerStore;

export const useBirdsInfo = () =>
    useSchedulerStore(
        useShallow((state) => ({
            date: state.date,
            bird: state.bird,
            paksha: state.paksha,
            sunrise: state.sunrise,
            sunset: state.sunset,
        }))
    );

export const useBirdActions = () =>
    useSchedulerStore(
        useShallow((state) => ({
            setDate: state.setDate,
            setBird: state.setBird,
            hasHydrated: state.hasHydrated,
            setSunrise: state.setSunrise,
            setSunset: state.setSunset,
            // add any other actions you need here
        }))
    );

export const useBirdHydration = () => useSchedulerStore((state) => state.hasHydrated);
