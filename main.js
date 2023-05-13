const fs = require("fs");
const { joinMatchingPairs } = require("./src/join.js");
const { parseFile1, parseFile2 } = require("./src/parse.js");

const main = function () {
  const contentOfFile1 = fs.readFileSync(
    "./resource/match_large_1.txt",
    "utf-8"
  );
  const contentOfFile2 = fs.readFileSync(
    "./resource/match_large_2.txt",
    "utf-8"
  );

  const startingParts = parseFile1(contentOfFile1);
  const trailingParts = parseFile2(contentOfFile2);

  return joinMatchingPairs(startingParts, trailingParts);
};

main();
