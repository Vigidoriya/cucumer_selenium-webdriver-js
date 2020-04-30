const { By, Key} = require('selenium-webdriver');
const { BASE_URL } = require('../constants');
const { waitForElementVisible, waitForTitle } = require('../helpers/waits');
const BasePage = require('./basePage');

class HomePage extends BasePage {

    get searchInput() {
        return By.xpath(".//*[@type='text']");
    }
    get submit() {
        return By.xpath("//*[@type='submit'][@name='btnK']");
    }

    async open() {
        await super.driver.get(BASE_URL);
        await waitForTitle('Google', super.driver);
    }

    async enterQuery(query) {
        await waitForElementVisible(this.searchInput, super.driver);
        await super.driver.findElement(this.searchInput).sendKeys(query, Key.RETURN);
    }

}
module.exports = HomePage;