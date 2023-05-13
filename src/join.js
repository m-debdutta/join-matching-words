const joinMatchingPairs = (startingParts, trailingParts) => {
  const machedPairs = startingParts.map((string) => {
    const key = string.slice(-4);

    return string.split(0, -4) + trailingParts[key];
  });

  return machedPairs.join("\n");
};

exports.joinMatchingPairs = joinMatchingPairs;
