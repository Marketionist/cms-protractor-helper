/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

'use strict';
/* global browser, expect */

// #############################################################################
// INTEGRATION TEST HELPER LIBRARY
var CMS = {};

CMS.Protractor = {
    mainElementsWaitTime: 12000,
    iframeWaitTime: 15000,

    // utility to generate a number of random digits
    randomDigits: function (digitsNumber) {
        return Math.floor(Math.random() * (Math.pow(10, digitsNumber) + 1));
    },

    // utility to wait for element to appear on the page
    waitFor: function (element) {
        return browser.wait(function () {
            return browser.isElementPresent(element);
        }, this.mainElementsWaitTime);
    },

    // utility to wait for element to be displayed on the page
    waitForDisplayed: function (element) {
        return browser.wait(function () {
            return element.isDisplayed();
        }, this.mainElementsWaitTime);
    },

    // utility to select the option
    selectOption: function (select, optionText, option) {
        var that = this;

        // wait for select to appear
        that.waitFor(select);

        // click on select
        return select.click().then(function () {
            // send option text to select
            select.sendKeys(optionText);
            // click on option
            return option.click();
        }).then(function () {
            // click on select
            return select.click();
        });
    },

    // utility to log in to the site
    login: function (data) {
        var that = this;

        // object can contain username and password, if not set it will
        // fallback to 'admin'
        var credentials = data.credentials ||
            {
                site: 'http://127.0.0.1:8000/',
                username: 'admin',
                password: 'admin'
            };
        var elements = data.elements;

        // go to the main page
        browser.get(credentials.site);

        // wait for username input to appear
        that.waitFor(elements.usernameInput);

        elements.usernameInput.clear();

        // fill in email field
        elements.usernameInput.sendKeys(
            credentials.username).then(function () {
            elements.passwordInput.clear();

            // fill in password field
            return elements.passwordInput.sendKeys(
                credentials.password);
        }).then(function () {
            elements.loginButton.click();

            // wait for user menu to appear
            that.waitFor(elements.userMenu);
        });
    }

};

module.exports = CMS.Protractor;
