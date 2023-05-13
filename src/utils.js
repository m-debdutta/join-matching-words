const objectify = function (listOfSecondString) {
  const object = {};
  for (string of listOfSecondString) {
    const key = string.slice(0, 4);
    const value = string.slice(4);
    object[key] = value;
  }

  return object;
};

exports.objectify = objectify;
