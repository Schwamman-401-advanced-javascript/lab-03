'use strict';
const fs = require('fs');
const editFile = require('../src/edit-file');
const readFileAsObject = require('../src/read-file-as-object');

describe('fs.readFile', () => {
  it('adds read data to array readData', done => {
    const file = '../files/data/person.json';
    const readData = [];

    readFileAsObject(file, (err, result) => {
      if (err) throw err;
      readData.push(result);
    });

    editFile(file)

    // fs.readFile(file, (err, data) => {
    //   if (err) throw err;
    //   readData.push(JSON.parse(data));
    //   expect(readData.length).toEqual(1);
    //   done();
    // });

  });
});
