function add(string) {

  const separators = ['\n', ','];

  if (string.length == 0) {
    return 0;
  }

  if (string.match(/^\/\/(\D+)\n/)) {
    separators.push(string.match(/^\/\/(\D+)\n/)[1]);
  }

  const numberList = string.split(new RegExp(`[${separators.join('')}]`))
    .filter(item => !isNaN(parseInt(item)));

  let sum = 0;
  for (let i=0; i<numberList.length; i++) {
    sum += parseInt(numberList[i]);
  }
  return sum;
}

module.exports = add;