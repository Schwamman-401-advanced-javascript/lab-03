const fs = require('fs');

function readFileAsObject(filename, callback) {
  fs.readFile(filename, (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    try {
      var object = JSON.parse(data)[0];
      // "return" the object to the callback
      callback(null, object);
    } catch (parseErr) {
      callback(parseErr);
    }
  });
}

module.exports = readFileAsObject;
