const repeatString = (repeatTimes, sentence) => {
  return sentence.repeat(repeatTimes);
};

console.log(repeatString(6, "I")); // "IIIIII"
console.log(repeatString(5, "Hello")); // "HelloHelloHelloHelloHello"
