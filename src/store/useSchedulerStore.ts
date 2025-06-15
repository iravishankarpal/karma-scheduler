// store/useSchedulerStore.ts
import { create } from "zustand";
import { useShallow } from "zustand/shallow";
import { devtools, persist } from "zustand/middleware";
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
    setDate: (d: Date) => void;
    setBird: (b: string) => void;
}

// 🧠 Step 1: type for middleware combo
type MyState = State;
type MiddlewareStack = [["zustand/immer", never], ["zustand/devtools", never], ["zustand/persist", Partial<PersistOptions<MyState>>]];

// type MiddlewareStack = [["zustand/immer", never], ["zustand/devtools", Partial<MyState>]];

// 🧩 Step 2: Typed custom middleware
const withMiddlewares = (f: StateCreator<MyState, MiddlewareStack>) =>
    devtools(
        // @ts-expect-error
        persist(immer(f), {
            name: "scheduler", // for localStorage key
            onRehydrateStorage: () => (state: MyState) => {
                console.log("✅ Zustand rehydrated!", state);
                if (state) {
                    state.hasHydrated = true;
                    return state;
                }
            },
        })
    );

// ✅ Final store with typed middleware stack
export const useSchedulerStore = create<MyState>()(
    withMiddlewares((set) => ({
        hasHydrated: false,
        date: new Date(),
        bird: names.birds.Crow,
        paksha: names.paksha.Krishnapaksha,
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
    }))
);

export default useSchedulerStore;

export let useBirdsInfo = () =>
    useSchedulerStore(
        useShallow((state) => ({
            date: state.date,
            bird: state.bird,
        }))
    );

export const useBirdActions = () =>
    useSchedulerStore(
        useShallow((state) => ({
            setDate: state.setDate,
            setBird: state.setBird,
        }))
    );

export const useBirdHydration = () => useSchedulerStore((state) => state.hasHydrated);
