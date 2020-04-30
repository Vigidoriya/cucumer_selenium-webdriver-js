const Browser = require('../config/browser');
class BasePage {

    get driver (){
        return Browser.getWebDriverInstance();
    } 
}
module.exports = BasePage;