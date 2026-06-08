import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import loginData from '../testdata/login.json'

//console.log(loginData.url)

let loginPage : LoginPage

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(loginData.url)
})



test("Valid Login Scenario",async({page})=>{
    await loginPage.loginWithValidCredentials(loginData.username,loginData.password)
    await expect(loginPage.loginSuccessMessage).toBeVisible()
})

test("Invalid Login",async({page})=>{
    await loginPage.invalidLogin(loginData.username,loginData.incorrectPassword)
    await expect(loginPage.loginErrorMessage).toHaveText("Incorrect email or password.")
})

test("Empty password validation",async({page})=>{
    await loginPage.emptyPassword(loginData.username,loginData.emptyPassword)
    await expect(loginPage.emptyPassErrorMsg).toHaveText("*Password is required")
})