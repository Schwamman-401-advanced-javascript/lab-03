'use strict';

const fs = require('fs');
const promisify = require('./util/promisify');

const file = process.argv[2];
const dataArray = [];
const promiseToRead = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

//Reads and modifies data in file passed in from console

promiseToRead(file)
  .then(data => {
    dataArray.push(JSON.parse(data));
    console.log(dataArray);
    modifyData();
  })
  .then(() => writeFile(file, JSON.stringify(dataArray)))
  .catch(err => {
    console.log(err);
  });

function modifyData() {
  dataArray[0].firstName = 'Jack';
  dataArray[0].lastName = 'Sparrow';
  dataArray[0].hair.type = 'long';
  dataArray[0].favoriteFoods = 'Rum';
  console.log(dataArray);
}


