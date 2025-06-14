/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom", // Required for React components
        setupFiles: ["./test/setup.ts"], // optional
    },
});
