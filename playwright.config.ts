import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './VRT',
  fullyParallel: false,
  reporter: 'html',
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0,
      threshold: 0,
      animations: 'disabled',
      pathTemplate: '{testDir}/__screenshots__/{testName}-{projectName}.png',
    },
  },

  projects: [
    {
      name: 'SMALL',
      use: {
        viewport: { width: 1024, height: 768 },
        deviceScaleFactor: 1,
      },
    },
    {
      name: 'BIG',
      use: {
        viewport: { width: 1920, height: 1080 },
        deviceScaleFactor: 1,
      },
    },
  ]
});
