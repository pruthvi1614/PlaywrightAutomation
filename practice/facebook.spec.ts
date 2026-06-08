import { test, expect } from '@playwright/test'

test("Facebook Registration", async ({ page }) => {
    await page.goto("https://www.facebook.com/")
    await page.locator("[class^='x1ja2u2z']").last().click()
    await page.locator("#_R_1cl2p4jikacppb6amH1_").fill("raj")
    await page.locator('#_R_1kl2p4jikacppb6amH1_').fill("munja")
    await page.getByRole("combobox", { name: "Select day" }).click()
    await page.getByRole("option", { name: "16" }).click()

    await page.getByRole("combobox", { name: "Select month" }).click()
    await page.getByRole("option", { name: "August" }).click()

    await page.getByRole("combobox", { name: "Select year" }).click()
    await page.getByRole("option", { name: "1993" }).click()

    await page.getByRole("combobox").nth(3).click()

    await page.getByRole("option", { name: "Male", exact: true }).click()

    //await page.locator()
    await page.waitForTimeout(5000)
})