import { test, expect } from '@playwright/test'

test('List box selection in dfferent ways', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dropdown')
    await page.locator('#country').selectOption("India")
    //await page.waitForTimeout(3000)
    await page.locator('#country').selectOption({ label: "Australia" })
    await expect(page.locator('#country')).toHaveText(/Australia/)
    //await page.waitForTimeout(3000)
    await page.locator('#country').selectOption({ value: "EG" })
   // await page.waitForTimeout(3000)
    await page.locator('#country').selectOption({ index: 20 })
    //await page.waitForTimeout(3000)
})