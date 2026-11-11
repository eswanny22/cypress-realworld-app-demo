import { defineConfig } from "cypress";

// Standalone config for the flaky kitchen sink demo; it does not need the
// Real World App (or its support file / db tasks) to be running.
export default defineConfig({
  retries: 3,
  e2e: {
    baseUrl: "https://example.cypress.io",
    specPattern: "cypress/kitchen-sink/**/*.spec.{js,ts}",
    supportFile: false,
  },
});
