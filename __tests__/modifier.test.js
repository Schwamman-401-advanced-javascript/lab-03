const modifier = require('../src/modifier');

describe('modifier', () => {
  it('makes the first person a pirate', () => {
    // Arrange
    var data = [
      {
        firstName: 'Jon',
        lastName: 'Schwamman',
        hair: { type: 'boring' },
        favoriteFoods: 'F4',
        pets: [],
      },
      {
        firstName: 'Keith',
      },
    ];

    // Act
    modifier(data, 'Jack', 'Sparrow');

    // Assert
    /*
    // Long way
    expect(data.length).toBe(1);
    expect(data[0].firstName).toBe('Jack');
    expect(data[0].lastName).toBe('Sparrow');
    expect(data[0].hair).toHaveProperty('type', 'long');
    expect(data[0].favoriteFoods).toBe('Rum');
    */

    // Short way
    expect(data).toEqual([
      {
        firstName: 'Jack',
        lastName: 'Sparrow',
        hair: { type: 'boring' },
        favoriteFoods: 'F4',
        pets: [],
      },
      {
        firstName: 'Keith',
      },
    ]);
  });

  it('does nothing for empty array', () => {
    // Arrange
    var data = [];

    // Act
    modifier(data);

    // Assert
    expect(data).toEqual([]);
  });
});
