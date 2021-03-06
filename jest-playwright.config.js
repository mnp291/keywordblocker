module.exports = {
    launchBrowserApp: {
        headless: true,
    },
    context: {
        ignoreHTTPSErrors: true,
        viewport: {
            width: 1920,
            height: 1080,
        },
    },
    browsers: ['chromium', 'firefox'],
    devices: [],
};
