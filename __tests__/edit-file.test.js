'use strict';
const editFile = require('../src/edit-file');
const readFileAsObject = require('../src/read-file-as-object');

describe('editFile', () => {
  it('updates the data in the file', async () => {
    const file = './files/data/person.json';
    const originalData = [];
    const updatedData = [];

    readFileAsObject(file, (err, result) => {
      if (err) throw err;
      originalData.push(result);
    });

    editFile(file, '123456', 'Scissorhands');

    readFileAsObject(file, (err, result) => {
      if (err) throw err;
      updatedData.push(result);
      
    });  
    
    editFile(file, 'Edward', 'Scissorhands');

  });
});
