function add(string) {

  const separator = ',';

  if (string.length == 0) {
    return 0;
  }

  const numberList = string.split(separator)

  let sum = 0;
  for (let i=0; i<numberList.length; i++) {
    sum += parseInt(numberList[i]);
  }
  return sum;
}

module.exports = add;