import { test, expect } from '@playwright/test'
test.describe.configure({ timeout: 90000 })

test("Calender handling", async ({ page }) => {

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()

    const now = new Date()
    const timestamp = `${String(now.getFullYear()).slice(-2)}-` +
        `${String(now.getMonth() + 1).padStart(2, '0')}-` +
        `${String(now.getDate()).padStart(2, '0')}-` +
        `${String(now.getHours()).padStart(2, '0')}-` +
        `${String(now.getMinutes()).padStart(2, '0')}`    //for saving screenshots with timestamp YY-MM-DD-HH-MM format

    const day = 29
    const month = "August"
    const year = "2020"

    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")

    await page.locator('#sixth_date_picker').click()


    while (await yearPicker.textContent() !== year || await monthPicker.textContent() !== month) {
        await page.locator("//span[text()='Prev']").click()
        //await page.waitForTimeout(1000)
    }

    //await page.locator(".ui-state-default").nth(day - 1).click()
    await page.getByText(`${day}`, { exact: true }).click()
    const dateValue = await page.locator('#sixth_date_picker').inputValue()
    console.log("input: "+dateValue)
    await expect(page.locator('#sixth_date_picker')).toHaveValue('08/29/2024')
    await page.locator('#sixth_date_picker').screenshot({ path: `screenshots/calender_${timestamp}.png` })
})

test("dummy test1", async ({ page }) => {
console.log("dummy test1")
})

test("dummy test2", async ({ page }) => {
console.log("dummy test2")
})