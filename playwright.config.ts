import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://the-internet.herokuapp.com/login',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
});