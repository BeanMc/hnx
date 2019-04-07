const generate = require('../../../generate');
const config = require('../../../config')();
const csv = require('csvtojson');
const fs = require('fs');
const json2csv = require('json2csv').parse;
const path = require('path');
const filename = path.join(config.rootPath, 'dataps.csv');
const testfilename = path.join(config.rootPath, 'test.csv');
var output = [];
var outputMore = [];
csv()
  .fromFile(filename)
  .then((jsonObj) => {
    output = [].concat(jsonObj);
  }).catch((e) => {
  const fields = ['day', 'time', 'KL', 'TK'];
  const opts = { fields };
  const csv = json2csv([], opts);
  // fs.writeFileSync(filename, csv);
});
var length = output.length;


const get = ({ Question }, { config }) => (req, res, next) => {
  const { _id } = req.params;
  try {
    var obj = { date: (new Date()).toString(), KL: req.headers.kl, TK: req.headers.tk };
    var content = {
      'stt': length,
      'day': obj.date.substring(0, 15),
      'time': obj.date.substring(15, 24),
      'KL': obj.KL.toString(),
      'TK': obj.TK.toString(),
    };
    generate(`"${content.stt}","${content.day}","${content.time}","${content.KL}","${content.TK}"`, filename);
    outputMore.push(`"${content.stt}","${content.day}","${content.time}","${content.KL}","${content.TK}"`);
    // outputMore.push(content);
    // console.log(outputMore,'data');
    res.status(200).end(JSON.stringify(req.headers));
  } catch (error) {
    next(error);
  }
  length++;
};

setInterval(function() {
  // const fields = ['stt', 'day', 'time', 'KL', 'TK'];
  // const opts = { fields };
  // const csv = json2csv(outputMore, opts);
  // console.log(outputMore, 'cloneData');
  // fs.writeFileSync(testfilename, csv);
  outputMore.forEach(function(item) {
    fs.appendFileSync(testfilename, item + '\r\n');
  })
  outputMore = [];


}, 60000);

module.exports = { get };
