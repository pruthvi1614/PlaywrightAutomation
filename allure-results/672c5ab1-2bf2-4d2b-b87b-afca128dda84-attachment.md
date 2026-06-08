# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardusingjson.spec.ts >> ADIDAS ORIGINAL Tests >> View ADIDAS ORIGINAL details page
- Location: tests\dashboardusingjson.spec.ts:28:13

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://rahulshettyacademy.com/client", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e7]: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e15]: 
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e17]: 
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e21]: 
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading "Practice Website for Rahul Shetty Academy Students" [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e28]:
      - paragraph [ref=e29]:
        - generic [ref=e30]: Register to sign in with your personal account
      - generic [ref=e31]:
        - heading "Log in" [level=1] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Email
            - textbox "email@example.com" [ref=e36]
          - generic [ref=e37]:
            - generic [ref=e38]: Password
            - textbox "enter your passsword" [ref=e39]
          - button "Login" [ref=e40] [cursor=pointer]
        - link "Forgot password?" [ref=e41] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e42] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e43]:
    - heading "Why People Choose Us?" [level=1] [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e50]: 
        - generic [ref=e51]:
          - heading "3546540" [level=1]
          - paragraph [ref=e52]: Successfull Orders
      - generic [ref=e53]:
        - generic [ref=e55]: 
        - generic [ref=e56]:
          - heading "37653" [level=1]
          - paragraph [ref=e57]: Customers
      - generic [ref=e58]:
        - generic [ref=e60]: 
        - generic [ref=e61]:
          - heading "3243" [level=1]
          - paragraph [ref=e62]: Sellers
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e66]: 
        - generic [ref=e67]:
          - heading "4500+" [level=1]
          - paragraph [ref=e68]: Daily Orders
      - generic [ref=e69]:
        - generic [ref=e71]: 
        - generic [ref=e72]:
          - heading "500+" [level=1]
          - paragraph [ref=e73]: Daily New Customer Joining
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test'
  2  | 
  3  | export class LoginPage {
  4  |     //locator properties
  5  | 
  6  |     private page: Page
  7  |     private username: Locator
  8  |     private password: Locator
  9  |     private loginBtn: Locator
  10 |     loginErrorMessage: Locator
  11 |     emptyPassErrorMsg: Locator
  12 |     loginSuccessMessage: Locator
  13 | 
  14 |     constructor(page1: Page) {
  15 |         this.page = page1
  16 |         this.username = this.page.locator('#userEmail')
  17 |         this.password = this.page.locator('#userPassword')
  18 |         this.loginBtn = this.page.locator('#login')
  19 |         this.loginErrorMessage = this.page.getByText(" Incorrect email or password. ")
  20 |         this.emptyPassErrorMsg = this.page.getByText("*Password is required")
  21 |         this.loginSuccessMessage = this.page.getByLabel('Login Successfully')
  22 |         
  23 |     }
  24 | 
  25 |     async launchURL(url: string) {
> 26 |         await this.page.goto(url)
     |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
  27 |     }
  28 | 
  29 |     async loginWithValidCredentials(username: string, password: string) {
  30 |         await this.username.fill(username)
  31 |         await this.password.fill(password)
  32 |         await this.loginBtn.click()
  33 |     }
  34 | 
  35 |     async invalidLogin(username: string, incorrectPassword: string) {
  36 |         await this.username.fill(username)
  37 |         await this.password.fill(incorrectPassword)
  38 |         await this.loginBtn.click()
  39 |     }
  40 | 
  41 |     async emptyPassword(username: string,emptyPassword:string){
  42 |         await this.loginWithValidCredentials(username,emptyPassword)
  43 |     }
  44 | 
  45 | 
  46 | }
```