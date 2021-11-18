const isIsogram = (sentence) => {
  return sentence.split("").length === Array.from(new Set(sentence.toLowerCase())).length
};

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
