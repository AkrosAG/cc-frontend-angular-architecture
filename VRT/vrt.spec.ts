/* eslint-disable @typescript-eslint/no-explicit-any */

import { test, expect } from '@playwright/test';
import * as fs from 'fs';

interface Story {
  id: string;
  name: string;
  title: string;
  [key: string]: any;
}

const INDEX_JSON = "storybook-static/index.json";
const STORYBOOK_URL = 'http://localhost:6006/iframe.html';

function loadStories(): Story[] {
  if (!fs.existsSync(INDEX_JSON)) {
    throw new Error(`Missing index.json! Checked path: ${INDEX_JSON}`);
  }

  const json = JSON.parse(fs.readFileSync(INDEX_JSON, 'utf8'));
  const entries = json.entries || {};
  const allStories = Object.values(entries) as Story[];
  return allStories.filter(
    (e) => e['type'] === 'story' && e.id && e.name && e.title?.split("/")[0] === "Pages",
  );
}

test.describe('Storybook visual tests', () => {
  const stories = loadStories();
  stories.forEach((story) => {
    test(`Story: ${story.id}`, async ({ page }) => {
      const url = `${STORYBOOK_URL}?id=${story.id}`;
      await page.goto(url);

      await page.waitForSelector('html', {
        state: 'attached',
        timeout: 5000,
      });

      const hasAsyncReady = await page.evaluate(() => {
        return Boolean((window as any).__playwrightReadyPromise);
      });

      if (hasAsyncReady) {
        await page.evaluate(() => (window as any).__playwrightReadyPromise);
      }

      await page.waitForTimeout(150);

      const featureName = `${story.title.replace(/\//g, '_').replace(/\s+/g, '_')}_${story.name.replace(/ /g, '_')}`;

      await expect(page).toHaveScreenshot(`${featureName}.png`, {
        fullPage: true,
      });
    });
  });
});
