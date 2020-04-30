const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class ResultPage extends BasePage {

    get listOfProducts() {
        return By.xpath(".//*[@id='search']//h3");
    }
    async getTextFromFirstProduct() {
        const elements = await super.driver.findElements(this.listOfProducts);
        return elements[0].getText();
    }
}
module.exports = ResultPage;