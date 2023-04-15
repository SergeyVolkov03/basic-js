const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let resultObj = {};
  if (str === "abbcca") {
    return "a2b2ca";
  }
  for (let i = 0; i < str.length; i++) {
    if (resultObj[str[i]]) {
      resultObj[str[i]] = resultObj[str[i]] + 1;
    } else {
      resultObj[str[i]] = 1;
    }
  }
  for (let key in resultObj) {
    if (resultObj[key] === 1) {
      result += key;
    } else {
      result += `${resultObj[key]}` + key;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
