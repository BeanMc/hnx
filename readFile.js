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
    jsonObj.forEach(function(item, index) {
      console.log(index);
      objAfter.push(item);
      var time = moment(item.day + item.time).add(1, 'seconds');
      var item2 = jsonObj[index + 1];
      if (item2 && item2.time !== item.time) {
        var time2 = moment(item2.day + item2.time);
        while (time2.format() !== time.format()) {
          var temp = JSON.stringify(item);
          temp = JSON.parse(temp);
          temp.time = time.format(' HH:mm:ss');
          objAfter.push(temp);
          time = time.add(1, 'seconds');
        }
        return;
      } else {
        return;
      }
    });
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