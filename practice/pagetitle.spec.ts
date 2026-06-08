import {test,expect} from '@playwright/test'

test('Page title',async({page}) => {
    await page.goto("https://tatacliq.com")
    const pageTitle = await page.title()
    const titleChar = pageTitle.length

    console.log(`Page title : ${pageTitle}`)
    console.log(`Length: ${titleChar}`)

    //Print page url

    const pageurl=await page.url()
    const urlLength = pageurl.length

    console.log(`Page url is: ${pageurl}`)
    console.log(`URL Length : ${urlLength}`)

})