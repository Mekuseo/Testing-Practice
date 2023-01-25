//  Task 1
const stringLength = (string) => {
  if(string.length > 10 || string.length < 1) {
    return ('String length must be between 1 and 10');
  }
  return string.length;
 }

module.exports = stringLength;