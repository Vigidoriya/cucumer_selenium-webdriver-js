const { until } = require('selenium-webdriver');

async function waitForElementVisible(element, driver) {
    await driver.wait(until.elementLocated(element), 10000);
}

async function waitForTitle(title, driver) {
    await driver.wait(until.titleContains(title), 10000);
}

module.exports = { waitForElementVisible , waitForTitle};