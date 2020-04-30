const { Builder, Capabilities } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');
class Browser {

    static getWebDriverInstance() {
        if (this.driver != undefined) {
            return this.driver;
        }
        return this.driver = this.init();
    }

    static init() {
        if (this.driver === undefined) {
            const pathChromedriver = path.resolve('./src/support/drivers/chromedriver.exe');
            chrome.setDefaultService(new chrome.ServiceBuilder(pathChromedriver).build());
            const capabilities = Capabilities.chrome().set('chromeOptions', { "w3c": false });
            this.driver = new Builder().withCapabilities(capabilities).build();
            this.driver.manage().window().maximize();

        }
        return this.driver;
    }

    static close() {
        if (this.driver) {
            this.driver.quit();
        }
    }

    async waitForElementVisible(element) {
        await this.driver.wait(until.elementIsVisible(element), 1000);
    }
}

module.exports = Browser;