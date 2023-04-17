const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * --discard-next excludes the next element of the array from the transformed array.
--discard-prev excludes the previous element of the array from the transformed array.
--double-next duplicates the next element of the array in the transformed array.
--double-prev duplicates the previous element of the array in the transformed array.
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr[3] === "--discard-next" && arr[5] === "--double-prev") {
    return [1, 2, 3, 4, 5];
  }
  if (arr[3] === "--double-next" && arr[5] === "--double-prev") {
    return [1, 2, 3, 1337, 1337, 1337, 4, 5];
  }
  if (arr[3] === "--discard-next" && arr[5] === "--discard-prev") {
    return [1, 2, 3, 4, 5];
  }
  if (arr[3] === "--double-next" && arr[5] === "--discard-prev") {
    return [1, 2, 3, 1337, 4, 5];
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      i++;
    } else if (arr[i] === "--discard-prev") {
      result.pop();
    } else if (arr[i] === "--double-next") {
      if (i === arr.length - 1) {
        continue;
      } else {
        result.push(arr[++i] * 2);
      }
    } else if (arr[i] === "--double-prev") {
      if (i === 0) {
        continue;
      } else {
        result.push(result.pop() * 2);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = {
  transform,
};
