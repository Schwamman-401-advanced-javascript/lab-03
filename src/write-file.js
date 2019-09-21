'use strict';

const fs = require('fs');

function writeFile(file, dataArray, callback) {
  fs.writeFile(file, JSON.stringify(dataArray), (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    
    try {
      callback(null, JSON.stringify(dataArray));
    } catch (parseErr) {
      callback(parseErr);
    }
  });
}

module.exports = writeFile;



