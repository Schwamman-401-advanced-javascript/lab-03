
function modifyData(dataArray, firstName, lastName) {
  if (dataArray.length === 0) {
    return;
  }

  dataArray[0].firstName = firstName;
  dataArray[0].lastName = lastName;
}

module.exports = modifyData;
