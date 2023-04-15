const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(a, b) {
  let count = 0;
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        count += 1;
        b = b.slice(0, j) + b.slice(j + 1);
        break;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
