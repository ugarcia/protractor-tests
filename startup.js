// Get environment config
var env = require('./config.js');

// Set the protractor config
exports.config = {

    // Configurations from environment
    framework: env.framework,
    seleniumAddress: env.seleniumAddress,
    specs: env.specs,
    multiCapabilities: env.multiCapabilities,
    baseUrl: env.baseUrl,

    // Jasmine options
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    // Called before test are run
    onPrepare: function() {

        // Go to login page
        browser.driver.get(env.baseUrl + '/login');

        // Fill credentials from environment config and submit them
        browser.driver.findElement(by.css('[name=username]')).sendKeys(env.login.username);
        browser.driver.findElement(by.css('[name=password]')).sendKeys(env.login.password);
        browser.driver.findElement(by.css('[type="submit"]')).click();

        // Login takes some time, so wait until it's done.
        return browser.driver.wait(function() {

            // For ourapp's login, we know it's done when it redirects to /dashboard
            return browser.driver.getCurrentUrl().then(function(url) {
                return /dashboard/.test(url);
            });

        }, 10000);
    }    
};
