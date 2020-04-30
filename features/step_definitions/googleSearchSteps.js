const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

const HomePage = require(`../../src/pages/homePage`);
const ResultPage = require(`../../src/pages/resultPage`);

Given('the user (?:opens|navigates to) the Google search page', async function () {
    await new HomePage().open();
});

When('the user searches the product {string}', async function (query) {
    await new HomePage().enterQuery(query);
});

Then(/^the user sees term query "(.*)" in the first result at the Search Result grid$/, async function (result) {
    expect(await new ResultPage().getTextFromFirstProduct()).to.contains(result);
});

Given(/^table example with raw and rows$/, async function (table) {
    console.log(`ROWS returns the table as a 2-D array, without the first row: ${table.rows()}`);
    console.log(`RAW returns the table as a 2-D array ${table.raw()}`);
})

Given(/^the user selects (?:report "(.*)"|"(.*)" report) at the Annual Reports page$/, function (arg1, arg2) {
    if (arg1) {
        // TODO: implement 
    } else {
        // TODO: implement 
    }
});

Then(/^the user sees (\d+) results? at the Search Result grid$/, async function (count) {
    // TODO: implement
});

Then(/^the response should be JSON$/, async function (json) {
    console.log(`Entered JSON ${json}`)
});