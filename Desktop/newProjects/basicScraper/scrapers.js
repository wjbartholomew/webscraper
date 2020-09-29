const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="landingImage"]');
    const src = await el.getProperty('src');
    const image = await src.jsonValue();

    const [el2] = await page.$x('//*[@id="productTitle"]');
    const txt = await el2.getProperty('textContent');
    const title = await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="price_inside_buybox"]');
    const txt2 = await el3.getProperty('textContent');
    const price = await txt2.jsonValue();

    console.log({ image, title, price });

    browser.close();
}

scrapeProduct('https://www.amazon.com/Shadow-Conspiracy-Symbol-Cassette-110mm/dp/B07K4VWJJ4/ref=sr_1_3?dchild=1&keywords=shadow+conspiracy+symbol&qid=1599144012&sr=8-3');