const csv = require('csvtojson');
const fs = require('fs');
const json2csv = require('json2csv').parse;
const path = require('path');
const filename = path.join(__dirname, 'dataps.csv');
// var output = []; // holds all rows of data

module.exports = function(output) {
  csv()
    .fromFile(filename)
    .then((jsonObj) => {
      output = [].concat(jsonObj);
    }).catch((e) => {
    const fields = ['day', 'time', 'KL', 'TK'];
    const opts = { fields };
    const csv = json2csv([], opts);
    fs.writeFileSync(filename, csv);
  });

}
