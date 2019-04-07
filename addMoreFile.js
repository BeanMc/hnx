var fs = require('fs');
var path = require('path');
var moment = require('moment');
const json2csv = require('json2csv').parse;
const filename = path.join(__dirname, 'dataps.csv');
const writeFileName = path.join(__dirname, 'test.csv');
const csv = require('csvtojson');

var data = {};
// setInterval(function() {
//   const cloneData = clone(data);
//   console.log(cloneData, 'cloneData');
//   data = [];
// }, 5000);
module.exports = {
  loopWrite: function() {
    console.log(filename, 'jsonObj=====================');
    csv()
      .fromFile(writeFileName)
      .then((jsonObj) => {
        // console.log(jsonObj);
        var objAfter = [];
        const fields = ['stt', 'day', 'time', 'KL', 'TK'];
        const opts = { fields };
        const csvget = json2csv(jsonObj, opts);
        console.log(csvget, 'jsonObj=====================');
        fs.writeFileSync(csvget, csv, function(err) {
          console.log('add more line');
        });
      });
  },
};

