'use strict';

const fs = require('fs');
const modifyData = require('./modifier');
const readFileAsObject = require('./read-file-as-object');
const promisify = require('./util/promisify');
const writeFileAsJSON = require('./write-file.js');

const file = process.argv[2];
const dataArray = [];
const promiseToReadFileAsObject = promisify(readFileAsObject);
const writeFile = promisify(writeFileAsJSON);

//Reads and modifies data in file passed in from console

promiseToReadFileAsObject(file)
  .then(object => {
    dataArray.push(object);
    console.log(dataArray);
    modifyData(dataArray);
  })
  .then(() => writeFile(file, JSON.stringify(dataArray)))
  .catch(err => {
    console.log(err);
  });
