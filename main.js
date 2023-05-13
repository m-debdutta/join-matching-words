const fs = require("fs");

const main = function () {
  const contentOfFile1 = fs.readFileSync(
    "./resource/match_large_1.txt",
    "utf-8"
  );
  const contentOfFile2 = fs.readFileSync(
    "./resource/match_large_2.txt",
    "utf-8"
  );

  const listOfFirstString = contentOfFile1.split("\n");
  const listOfSecondString = contentOfFile2.split("\n");

  const createPair = function (listOfSecondString) {
    const pairs = {};
    for (string of listOfSecondString) {
      const key = string.slice(0, 4);
      const value = string.slice(4);
      pairs[key] = value;
    }

    return pairs;
  };

  const object = createPair(listOfSecondString);

  const output = listOfFirstString.map((string) => {
    const key = string.slice(-4);

    return string.split(0, -4) + object[key];
  });

  return output.join("\n");
};

main();
