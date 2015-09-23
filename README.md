# cms-protractor-helper
Helper functions library for protractor tests.

## Installation
Install `cms-protractor-helper` via [npm](https://www.npmjs.com/package/cms-protractor-helper "cms-protractor-helper on npmjs.com"):

    npm install cms-protractor-helper --save-dev

## Usage

To use `cms-protractor-helper` functions - add it at the top of the page:

    var cmsProtractorHelper = require('cms-protractor-helper');

Here is the list of all helper functions that are available:

`cmsProtractorHelper.randomDigits(digitsNumber);` - utility to generate a number of random digits

`cmsProtractorHelper.waitFor(element);` - utility to wait for element to appear on the page

`cmsProtractorHelper.waitForDisplayed(element);` - utility to wait for element to be displayed on the page

`cmsProtractorHelper.expectToBeAbsent(element);` - utility to test the expectation that the element is missing

`cmsProtractorHelper.selectOption(select, optionText, option);` - utility to select the option

`cmsProtractorHelper.login(data);` - utility to log in to the site: `data` object can contain credentials: site, username and password, if not set it will fallback to 'http://127.0.0.1:8000/', 'admin', 'admin'. Also `data` object should contain elements selectors needed for the login process - for example:
```
// login to the site
cmsProtractorHelper.login({
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
