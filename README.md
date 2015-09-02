# cms-protractor-helper
Helper functions library for protractor tests:

```randomDigits(digitsNumber)``` - utility to generate a number of random digits

```waitFor(element)``` - utility to wait for element to appear on the page

```waitForDisplayed(element)``` - utility to wait for element to be displayed on the page

```selectOption(select, optionText, option)``` - utility to select the option

```login(data)``` - utility to log in to the site: ```data``` object can contain credentials: site, username and password, if not set it will fallback to 'http://127.0.0.1:8000/', 'admin', 'admin'. Also ```data``` object should contain elements selectors needed for the login process - for example:
```
// login to the site
cmsProtractorHelper.login(
{
    credentials: {
        site: examplePage.site,
        username: examplePage.username,
        password: examplePage.password
    },
    elements: {
        usernameInput: examplePage.usernameInput,
        passwordInput: examplePage.passwordInput,
        loginButton: examplePage.loginButton,
        userMenu: examplePage.userMenu
    }
});
  ```
