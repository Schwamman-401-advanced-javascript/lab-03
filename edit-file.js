'use strict';

const fs = require('fs');

const file = process.argv[2];
const readData = [];

//Reads and modifies data in file passed in from console

fs.readFile(file, (err, data) => {
  if (err) throw err;
  readData.push(JSON.parse(data));

  console.log(readData);

  modifyData();
  fs.writeFile(file, JSON.stringify(readData), (err) => {
    if (err) throw err;
    console.log('Written to file!');
  });
})

function modifyData() {
  readData[0].firstName = 'Jack';
  readData[0].lastName = 'Sparrow';
  readData[0].hair.type = 'long';
  readData[0].favoriteFoods = 'Rum';
  console.log(readData);
}



