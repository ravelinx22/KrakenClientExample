const { WebClient, AndroidClient } = require('kraken-node');

(async () => {
    let firstClient = new AndroidClient(
        '93c6af52',
        './shazam.apk',
        'com.shazam.android',
        'com.shazam.android.activities.SplashActivity'
    );
    let firstProcess = await firstClient.start();
    await new Promise(r => setTimeout(r, 2000));
    await firstClient.stop();

    let secondClient = new WebClient('chrome');
    let secondProcess = await secondClient.start();
    await new Promise(r => setTimeout(r, 2000));
    await secondClient.stop();
})();