const json2csv = require('json2csv').parse;
const fs = require('fs');
const path = require('path');
const filename = path.join(__dirname, Math.random()+'output.csv');
const output = []; // holds all rows of data

const generateCSV = function(obj) {
  const fields = ['time', 'KL', 'TK'];
  const opts = { fields };
  if(obj.KL){
    output.push({
      'time': obj.date.toString(),
      'KL': obj.KL.toString(),
      'TK': obj.TK.toString(),
    });
  }
  try {
    // const csv = json2csv(myData, opts);
    const csv = json2csv(output, opts);
    // console.log(csv);
    if(obj.KL){
      fs.writeFileSync(filename, csv);
    }
  } catch (err) {
    console.error(err);
  }
};
module.exports = generateCSV;