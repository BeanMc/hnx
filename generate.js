const json2csv = require('json2csv').parse;
const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');
var output = []; // holds all rows of data




const generateCSV = function(obj,filename) {
  // const fields = ['stt','day', 'time', 'KL', 'TK'];
  // const opts = { fields };
  // output.push({
  //   'day': obj.date.substring(0, 15),
  //   'time': obj.date.substring(15, 24),
  //   'KL': obj.KL.toString(),
  //   'TK': obj.TK.toString(),
  // });
  try {
    // const csv = json2csv(myData, opts);
    // const csv = json2csv(output, opts);
    // console.log(csv);
    // if(obj.KL){
    // fs.writeFileSync(filename, csv);
    fs.appendFile(filename, obj + '\r\n',function(err) {
      console.log(obj);
    });

    // }
  } catch (err) {
    console.error(err);
  }
};
module.exports = generateCSV;