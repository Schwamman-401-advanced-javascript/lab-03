'use strict';

const fs = require('fs');
const modifyData = require('./modifier');
const readFileAsObject = require('./read-file-as-object');
const writeFile = require('./write-file.js');

const fileLocation = process.argv[2];


//Reads and modifies data in file passed in from console

function editFile(file) {
  readFileAsObject(file, (err, object) => {
    const dataArray = [];
    if (err) throw err;
    dataArray.push(object);
    modifyData(dataArray);
    writeFile(file, dataArray, (err, object) => {
      if (err) throw err;
      return object;
    });
  });
}

editFile(fileLocation);

module.export = editFile;

