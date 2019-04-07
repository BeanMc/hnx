var fs = require('fs');
var path = require('path');
var moment = require('moment');
const json2csv = require('json2csv').parse;
const filename = path.join(__dirname, 'test.csv');
const csv = require('csvtojson');
csv()
  .fromFile(filename)
  .then((jsonObj) => {
    // console.log(jsonObj);
    var objAfter = [];

    const fields = ['day', 'time', 'KL', 'TK'];
    const opts = { fields };
    const csv = json2csv(objAfter, opts);
    fs.writeFileSync(filename, csv, function(err) {
      console.log("add more line");
    });
    // objAfter.forEach(function(item) {
    //   console.log(item.time);
    // });
  });