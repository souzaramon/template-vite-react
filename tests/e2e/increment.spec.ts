import { test,expect } from '@playwright/test';

test.describe('increment', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })

  test('increment by user flow', async ({ page }) => {
    await test.step('span should start as zero', async () => {
      expect(await page.locator('span').first().innerText()).toBe('0');
    })

    await test.step('span should be one after one click', async () => {
      await page.locator('text=increment').click();
      expect(await page.locator('span').first().innerText()).toBe('1');
    })

    await test.step('span should be one after two click', async () => {
      await page.locator('text=increment').click();
      expect(await page.locator('span').first().innerText()).toBe('2');
    })
  })
})
