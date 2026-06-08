import { test, expect, Page } from '@playwright/test'

test('Handling Gmail multiple windows', async ({ page }) => {
    await page.goto('https://www.gmail.com')

    const page1 = page.waitForEvent("popup")
    await page.getByText('Help').click()
    const newpage = await page1
    await newpage.getByText('Improve your Google Account', { exact: true }).click()
    console.log("Child tab title: " + await newpage.title())

    //scrolls vertically to 1000 pixel
    page.evaluate(() => {
        window.scrollTo(0, 1000)
    })
    newpage.close()
    page.locator('#identifierId').fill("abcd@gmail.com")
    console.log("Parent tab title: " + await page.title())

})

test('Handling IRCTC multiple windows-old', async ({ page }) => {
    await page.goto('https://www.irctc.co.in/')
    await page.waitForLoadState('load')

    const flights = page.getByText('FLIGHTS',{exact:true})
    const hotels = page.getByText('HOTELS',{exact:true})
    const railDrishti = page.getByText('RAIL DRISHTI',{exact:true})

    await flights.scrollIntoViewIfNeeded()

    //Flight tab
    const flightPromis = page.waitForEvent("popup")
    await flights.click()
    const flightsPage = await flightPromis
    await flightsPage.waitForLoadState('load')
    const flightTabTitle = await flightsPage.title()
    console.log("Title: "+flightTabTitle)
    await flightsPage.close()

    //Hotels tab
    const hotelPromis = page.waitForEvent("popup")
    await hotels.click()
    const hotelPage = await hotelPromis
    await hotelPage.waitForLoadState('load')
    const hotelTabTitle = await hotelPage.title()
    console.log("Title: "+hotelTabTitle)
    await hotelPage.close()

    //RailDrishti tab
    const railDrishtiPromis = page.waitForEvent("popup")
    await railDrishti.click()
    const railDrishtiPage = await railDrishtiPromis
    await railDrishtiPage.waitForLoadState('load')
    const railDrishtiTabTitle = await railDrishtiPage.title()
    console.log("Title: "+railDrishtiTabTitle)
    await railDrishtiPage.close()
    
}) 



test('Handling IRCTC multiple windows-Optimised', async ({ page }) => {
    test.setTimeout(200000);
    await page.goto('https://www.irctc.co.in/')
    await page.waitForLoadState('domcontentloaded');

    const links = ['FLIGHTS', 'HOTELS', 'RAIL DRISHTI', 'E-CATERING', 'BUS', 
        'HOLIDAY PACKAGES', 'TOURIST TRAIN', 'HILL RAILWAYS', 'CHARTER TRAIN', 'GALLERY'];
    for (const linkText of links) {
        const link = page.getByText(linkText, { exact: true });
        await link.scrollIntoViewIfNeeded();
        const [popup] = await Promise.all([
            page.waitForEvent('popup'),
            link.click()
        ]);
        await popup.waitForLoadState('domcontentloaded')
        const title = await popup.title();
        console.log(`${linkText} Page Title : ${title}`)
        await popup.close();

    }

})