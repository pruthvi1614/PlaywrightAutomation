import { test, expect } from '@playwright/test'

test("Total web links", async ({ page }) => {
    await page.goto("https://facebook.com")
    const links = page.locator('a')
    const linkCount = await links.count()
    console.log(`Total links count: ${linkCount}`)

    for (let i = 0; i < linkCount; i++) {
        const element = links.nth(i)
        const linkDescription = await element.textContent()
        const linkurl = await element.getAttribute('href')
        console.log(`Link ${i+1} : ${linkDescription} : ${linkurl}`)

    }

})