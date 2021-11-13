const removeFirstAndLastCharacters = (sentence) => {
  return sentence.substring(1, sentence.length - 1);
};

console.log(removeFirstAndLastCharacters("Biyakuga")); // Output: iyakug
console.log(removeFirstAndLastCharacters("Keyuku")); // Output: eyuk
console.log(removeFirstAndLastCharacters("Tomoyo")); // Output: omoy
