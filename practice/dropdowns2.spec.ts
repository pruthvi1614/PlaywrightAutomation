import { test, expect } from '@playwright/test'

test.describe.configure({timeout:50000})

test('Counting list box items', async ({ page }) => {
    await page.goto('https://www.ebay.com/')
    const listbox = page.locator('#gh-cat option')
    //page.locator("//select[@id='gh-cat']/option") --we can use this xpath well
    const listboxCount = await listbox.count()
    console.log(`list box count: ${listboxCount}`)
    // console.log(`inner locators count: ${innerLocator}`)
    for (let i = 0; i < listboxCount; i++) {
        const listNames = await listbox.nth(i).textContent()
        console.log(`Item at index ${i} : ${listNames}`)
    }
})

test('Counting No of options in list box', async ({ page }) => {
    await page.goto('https://www.ebay.com/')
    const options = await page.locator('#gh-cat').locator('option')
    const listboxCount = await options.count()
    console.log(`list box count: ${listboxCount}`)
    const allOptionText = await options.allInnerTexts()
    for(const element of allOptionText){
        console.log(element)
    }
})


test('Multiple dropdown selection', async ({ page }) => {
    await page.goto('file:/E:/Pruthvi%20Raj/My%20projects/Playwright/MultiListboxHtmlpage.html')
    const dropdown = page.locator("select[name='multiSelection']")
    const dropdownOptions = page.locator("select[name='multiSelection'] option")
    const listCount = await dropdownOptions.count()
    console.log(listCount)
    await dropdown.selectOption("Green")
    await dropdown.selectOption(["purple","black"])
    await dropdown.selectOption([{label:"Yellow"},{label:"Red"}])
    await dropdown.selectOption([{index:0},{index:2},{index:4}])
    const listNames = await dropdownOptions.allTextContents()
    console.log(listNames)
})

