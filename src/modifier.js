
function modifyData(dataArray) {
  if (dataArray.length === 0) {
    return;
  }

  dataArray[0].firstName = 'Jack';
  dataArray[0].lastName = 'Sparrow';
  dataArray[0].hair.type = 'long';
  dataArray[0].favoriteFoods = 'Rum';
}

module.exports = modifyData;
