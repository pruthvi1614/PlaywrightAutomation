import { Locator, Page } from '@playwright/test'

export class LoginPage {
    //locator properties

    private page: Page
    private username: Locator
    private password: Locator
    private loginBtn: Locator
    loginErrorMessage: Locator
    emptyPassErrorMsg: Locator
    loginSuccessMessage: Locator

    constructor(page1: Page) {
        this.page = page1
        this.username = this.page.locator('#userEmail')
        this.password = this.page.locator('#userPassword')
        this.loginBtn = this.page.locator('#login')
        this.loginErrorMessage = this.page.getByText(" Incorrect email or password. ")
        this.emptyPassErrorMsg = this.page.getByText("*Password is required")
        this.loginSuccessMessage = this.page.getByLabel('Login Successfully')
        
    }

    async launchURL(url: string) {
        await this.page.goto(url)
    }

    async loginWithValidCredentials(username: string, password: string) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    async invalidLogin(username: string, incorrectPassword: string) {
        await this.username.fill(username)
        await this.password.fill(incorrectPassword)
        await this.loginBtn.click()
    }

    async emptyPassword(username: string,emptyPassword:string){
        await this.loginWithValidCredentials(username,emptyPassword)
    }


}