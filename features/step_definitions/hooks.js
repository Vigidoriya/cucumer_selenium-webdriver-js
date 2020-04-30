const { AfterAll, setDefaultTimeout, Before } = require("cucumber");
const Browser = require("../../src/config/browser");

setDefaultTimeout(15000);

AfterAll(function () {
    Browser.close();
});

Before({ tags: '@single', timeout: 500 }, function () {
    console.log(`Running tests with "@single" tag and timeout`);
})