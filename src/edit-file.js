'use strict';

const modifyData = require('./modifier');
const readFileAsObject = require('./read-file-as-object');
const writeFile = require('./write-file');



//Reads and modifies data in file passed in from console

function editFile(file = process.argv[2], firstName, lastName) {
  readFileAsObject(file, (err, object) => {
    const dataArray = [];
    if (err) throw err;
    dataArray.push(object);
    modifyData(dataArray, firstName, lastName);
    writeFile(file, dataArray, (err, updatedData) => {
      if (err) throw err;
    });
  });
}


module.exports = editFile;

