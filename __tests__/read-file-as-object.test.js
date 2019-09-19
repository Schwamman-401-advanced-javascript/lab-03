'use strict';

const readFileAsObject = require('../src/read-file-as-object');

describe('read-file module', () => {
  it('reads in the text file and convert its contents to an object', done => {
    // Arrange
    const file = `${__dirname}/../files/data/person.json`;

    readFileAsObject(
      file,
      (err, object) => {
        // Assert
        if (err) throw err;

        expect(object).toEqual(
          {'firstName':'Edward','lastName':'Scissorhands','hair':{'type':'wavy','color':'brown'},'favoriteFoods':['pizza','cupcakes','children'],'married':false,'kids':0}
        );

        done();
      });
  });

  it('calls callback with error for missing file', done => {
    // Arrange
    const file = 'missing.txt';

    // Act
    readFileAsObject(file, (err, object) => {
      // Assert
      expect(err).toBeDefined();
      expect(object).not.toBeDefined();

      done();
    });
  });

  it('calls callback with error for invalid file', done => {
    // Arrange
    const file = `${__dirname}/../files/data/invalid.json`;

    // Act
    readFileAsObject(file, (err, object) => {
      // Assert
      expect(err).toBeDefined();
      expect(object).not.toBeDefined();

      done();
    });
  });
});
