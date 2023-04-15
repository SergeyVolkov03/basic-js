const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  for (i = 0; i < domains.length; i++) {
    let splitString = [];
    domains[i].split(".");
    for (let domain of domains[i].split(".")) {
      splitString.push("." + domain);
    }
    for (let j = 1; j <= splitString.length; j++) {
      if (result[`${splitString.slice(-j).reverse().join("")}`]) {
        result[`${splitString.slice(-j).reverse().join("")}`] =
          result[`${splitString.slice(-j).reverse().join("")}`] + 1;
      } else {
        result[`${splitString.slice(-j).reverse().join("")}`] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats,
};
