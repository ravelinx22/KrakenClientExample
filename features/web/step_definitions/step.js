const { Given, When, Then } = require('@cucumber/cucumber');

Given('I buenas1', async function () {
    return this.driver.url('https://www.google.com');
});

Given('I buenas2', async function () {
    return this.driver.url('https://www.youtube.com');
});

When('I wait for 5 seconds', async function () {
    await new Promise(r => setTimeout(r, 5000));
    return
});