const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///Users/mlding/Documents/Interview/resume/index.html', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'resume.pdf'});
  browser.close();
})();