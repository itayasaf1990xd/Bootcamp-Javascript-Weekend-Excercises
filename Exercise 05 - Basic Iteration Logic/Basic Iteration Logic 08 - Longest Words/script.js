const shortestWordLength = (words) => {
  return words.reduce((previousValue, currentValue) => {
    return currentValue.length < previousValue
      ? currentValue.length
      : previousValue;
  }, words.length);
};

const shortestWords = (sentence) => {
  const words = sentence.split(" ");
  const shortestWord = shortestWordLength(words);
  return words.filter((word) => {
    return word.length === shortestWord;
  });
};

console.log(
  shortestWords(
    "Biyakuga Higashiri Frontend and Backend man Developer and like eat code"
  )
);
