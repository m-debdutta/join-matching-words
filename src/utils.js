const parseFile1 = (contentOfFile1) => contentOfFile1.trim().split("\n");

const parseFile2 = (contentOfFile2) => {
  const entries = contentOfFile2.trim().split("\n");
  const listOfEntries = entries.map((e) => [e.slice(0, 4), e.slice(4)]);
  return Object.fromEntries(listOfEntries);
};

const joinMatchingPairs = (startingParts, trailingParts) => {
  const machedPairs = startingParts.map((string) => {
    const key = string.slice(-4);

    return string.split(0, -4) + trailingParts[key];
  });

  return machedPairs.join("\n");
};

exports.parseFile1 = parseFile1;
exports.joinMatchingPairs = joinMatchingPairs;
exports.parseFile2 = parseFile2;
