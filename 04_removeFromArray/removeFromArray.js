const removeFromArray = function (arr, ...args) {
  return arr.filter((el) => !args.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
