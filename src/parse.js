const parseFile1 = (contentOfFile1) => contentOfFile1.trim().split("\n");

const parseFile2 = (contentOfFile2) => {
  const entries = contentOfFile2.trim().split("\n");
  const listOfEntries = entries.map((e) => [e.slice(0, 4), e.slice(4)]);
  return Object.fromEntries(listOfEntries);
};

exports.parseFile1 = parseFile1;
exports.parseFile2 = parseFile2;
