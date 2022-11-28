import { PlaywrightTestConfig, devices } from "@playwright/test";

let BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";

let config: PlaywrightTestConfig = {
  workers: process.env.CI ? 2 : 1,
  retries: process.env.CI ? 1 : 0,
  testDir: "./tests/e2e",
  webServer: {
    command: "yarn dev",
    url: BASE_URL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    screenshot: process.env.CI ? "off" : "only-on-failure",
    trace: "retain-on-failure",
    baseURL: BASE_URL,
    headless: process.env.CI ? true : false,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
  ],
};

export default config;
