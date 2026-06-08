import { test, expect } from '@playwright/test'

test("Login flow QEDGE Orange HRM", async ({ page }) => {
    await page.goto("http://orangehrm.qedgetech.com/")
    await page.locator("input#txtUsername").fill("Admin")
    await page.locator("input#txtPassword").fill("Qedge123!@#")
    await page.locator("#btnLogin").click()
    await expect(page.locator("h1")).toHaveText("Dashboard")
})



test("Login flow DEMO ORANGE HRM", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.locator(".oxd-button").click()
    await page.locator(".oxd-main-menu-item").first().click()
    await page.locator(".oxd-main-menu-item").last().click()
    await page.locator(".oxd-main-menu-item").nth(2).click()
})