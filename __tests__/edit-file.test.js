'use strict';
const fs = require('fs');

describe('fs.readFile', () => {
  it('adds read data to array readData', done => {
    const file = `${__dirname}/../files/data/person.json`;
    const readData = [];

    fs.readFile(file, (err, data) => {
      if (err) throw err;
      readData.push(JSON.parse(data));
      expect(readData.length).toEqual(1);
      done();
    });

  });
});
