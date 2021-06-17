const { Given, When, Then } = require('@cucumber/cucumber');

Given('I buenas1', () => {
    return 'pending';
});

When('I wait for 5 seconds', async function () {
    await new Promise(r => setTimeout(r, 5000));
    return
});