import { Locator, Page } from '@playwright/test'

export class DashboardPage {
    private page: Page
    products: Locator
    addToCartSuccessMsg: Locator
    viewPageProductName: Locator
    cartCount: Locator
    

    constructor(page: Page) {
        this.page = page
        this.products = this.page.locator('div.card-body')
        this.addToCartSuccessMsg = this.page.locator('#toast-container')
        this.viewPageProductName = this.page.locator('.col-lg-6.rtl-text h2')
        this.cartCount = this.page.locator('.btn.btn-custom label')
    }

    async addProductToCartByProductName(productName: string) {
        let productCount = await this.products.count()
        for (let i = 0; i < productCount; i++) {
            let productText = await this.products.nth(i).locator('b').textContent()
            //console.log(productText)
            if (productText === productName) {
                await this.products.nth(i).locator('button').last().click()
                break
            }
        }
    }

    async viewProductDetailsByProductName(productName: string) {
        let productCount = await this.products.count()
        for (let i = 0; i < productCount; i++) {
            let productText = await this.products.nth(i).locator('b').textContent()
            //console.log(productText)
            if (productText === productName) {
                await this.products.nth(i).locator('button').first().click()
                break
            }
        }
    }

    async getCartCount(){
        return Number(await this.cartCount.textContent())
    }






}