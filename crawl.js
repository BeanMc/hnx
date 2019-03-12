const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const generate = require('./generate');


async function getPic() {

  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  // await page.goto('https://banggia.hnx.vn/?fbclid=IwAR01smmFBq7NaOUC73ffvUoaZFZ0GexAaE8t4LZwfMVQnkXQgrAf92neLK4');
  //
  // await page.click('#PS');
  // await page.click('#derivative_details');
  // //
  // let content = await page.content();
  // var $ = cheerio.load(content);
  // var KL = $('#details_body> tbody >tr >td').eq(11).text();
  // var TK = $('#details_body> tbody >tr >td').eq(21).text();
  // var obj = { date: (new Date()).toString(), KL: KL, TK: TK };
  // console.log({
  //   'day': obj.date.substring(0,15),
  //   'time': obj.date.substring(15,24),
  //   'KL': obj.KL.toString(),
  //   'TK': obj.TK.toString(),
  // });
  // browser.close();
  generate(`"Sun Mar 03 2019"," 21:26:16","910.00","dasdad"`);
}

setInterval(
  function() {
    getPic();
  },
  2000,
);
