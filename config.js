/**
 * Environment configuration file (do not VC it!!)
 */
module.exports = {

    // Testing framework to use
    framework: 'jasmine2',

    // Selenium grid hub location
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    // Specs to run
    specs: [
        'test-spec.js'
    ],

    // Browsers drivers to use + options
    multiCapabilities: [
        {
            browserName: 'safari'
        },
        {
            browserName: 'chrome'
        },
        {
            browserName: 'firefox'
        }
    ],

    // Base url for the website to test
    baseUrl: 'http://gamewheel.local',

    // Login credentials for prelogin before navigating to secure pages
    login: {
        username: 'unai@gamewheel.co',
        password: 'gamewheel'
    }
};