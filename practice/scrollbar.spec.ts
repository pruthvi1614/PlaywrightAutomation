import { test, expect } from '@playwright/test'

test('Scrolling to an element', async ({ page }) => {
    await page.goto('https://www.amazon.in/')
    const facebook = page.getByText('Facebook')
    facebook.scrollIntoViewIfNeeded()
    await page.waitForTimeout(4000)
})

test('scroll bottom and top', async ({ page }) => {
    await page.goto('https://www.amazon.in/')
    await page.getByText('Facebook').waitFor({ state: 'visible' })

    const totalHeight = await page.evaluate(() => {
        return document.body.scrollHeight;
    });
    console.log("Total height: " + totalHeight);


    //scroll to bottom using evaluate
    page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight)
    })
    console.log('Scrolled to bottom')
    //await page.waitForTimeout(2000)

    //scroll back to top using evaluate
    page.evaluate(() => {
        window.scrollTo(0, 0)
    })
    await page.waitForTimeout(2000)

    //scrolls vertically to 1000 pixel
    page.evaluate(() => {
        window.scrollTo(0, 1000)
    })
    //await page.waitForTimeout(2000)

    //scrolls vertically to 2000 pixel
    page.evaluate(() => {
        window.scrollTo(0, 2000)
    })
    //await page.waitForTimeout(2000)

    //scrolls vertically to 3000 pixel
    page.evaluate(() => {
        window.scrollTo(0, 3000)
    })
    //await page.waitForTimeout(2000)

    //scrolls vertically to 4000 pixel
    page.evaluate(() => {
        window.scrollTo(0, 4000)
    })
    //await page.waitForTimeout(2000)
})