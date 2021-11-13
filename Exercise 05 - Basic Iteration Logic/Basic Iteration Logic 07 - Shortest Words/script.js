const shortestWordLength = (sentence) => {
  let words = sentence.split(" ");
  return words.reduce((previousValue, currentValue) => {
    return currentValue.length < previousValue
      ? currentValue.length
      : previousValue;
  }, words.length);
};

console.log(shortestWordLength("Biyakuga Higashiri Frontend and Backend Developer"));
