const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://google.com', {waitUntil: 'networkidle2'});
    await page.type('github');
    await page.click('input[type="submit"]');
    await page.waitForSelector('h3 a');
    const links = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('h3 a'));
        return anchors.map(anchor => anchor.textContent);
    });
    console.log(links.join('\n'));
    browser.close();

})();