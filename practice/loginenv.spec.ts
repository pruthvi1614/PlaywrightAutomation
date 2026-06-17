import { expect, test } from '@playwright/test'
import * as dotenv from 'dotenv';

test('Using Environment Variables', async ({ page }) => {
    await page.goto(process.env.BASE_URL!)
    await page.locator('#txtUsername').fill(process.env.USER_NAME!)
    await page.locator('#txtPassword').fill(process.env.PASSWORD!)
    await page.locator('#btnLogin').click()
    await expect(page).toHaveURL(/.*dashboard/)
})