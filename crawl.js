const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const generate = require('./generate');

async function getPic() {
  // const browser = await puppeteer.launch({ headless: false });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://banggia.hnx.vn/?fbclid=IwAR01smmFBq7NaOUC73ffvUoaZFZ0GexAaE8t4LZwfMVQnkXQgrAf92neLK4');
  // await page.waitFor(1000);
  await page.click('#PS');
  await page.click('#derivative_details');
  // await page.screenshot({path: 'google.png'});
  let content = await page.content();
  var $ = cheerio.load(content);
  var KL = $('#details_body> tbody >tr >td').eq(11).text();
  var TK = $('#details_body> tbody >tr >td').eq(21).text();
  var obj = { date: new Date(), KL: KL, TK: TK };
  generate(obj);
  console.log({
    'time': obj.date.toString(),
    'KL': obj.KL.toString(),
    'TK': obj.TK.toString(),
  });
  await browser.close();
}

setInterval(
  function() {
    getPic();
  },
  3000,
);
