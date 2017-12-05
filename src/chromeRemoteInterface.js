const CDP = require('chrome-remote-interface');

(async function () {
    try {
        var client = await CDP();
        const {Network, Page} = client;
        Network.requestWillBeSent((params) => {
            console.log(params.request.url);
        });
        await Promise.all([Network.enable(), Page.enable()]);
        await Page.navigate({url: 'https://github.com'});
        await Page.loadEventFired();
    } catch (err) {
        console.error(err);
    } finally {
        if (client) {
            await client.close();
        }
    }
})()
