'use strict';

const fs = require('fs');
const modifyData = require('./modifier');
const readFileAsObject = require('./read-file-as-object');

const file = process.argv[2];
const dataArray = [];

//Reads and modifies data in file passed in from console

readFileAsObject(file, (err, object) => {
  if (err) throw err;
  dataArray.push(object);

  console.log(dataArray);

  modifyData(dataArray);
  fs.writeFile(file, JSON.stringify(dataArray), (err) => {
    if (err) throw err;
    console.log('Written to file!');
  });
});
