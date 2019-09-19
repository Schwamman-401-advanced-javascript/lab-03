'use strict';

const fs = require('fs');
const modifyData = require('./modifier');

const file = process.argv[2];
const dataArray = [];

//Reads and modifies data in file passed in from console

fs.readFile(file, (err, data) => {
  if (err) throw err;
  dataArray.push(JSON.parse(data));

  console.log(dataArray);

  modifyData(dataArray);
  fs.writeFile(file, JSON.stringify(dataArray), (err) => {
    if (err) throw err;
    console.log('Written to file!');
  });
});
