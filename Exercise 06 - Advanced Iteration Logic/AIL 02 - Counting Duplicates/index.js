const countDuplicate = (sentence) => {
  sentence = sentence.toLowerCase();
  const count = {};
  for (const character of sentence) {
    if (character.match(/[[\w\d]/)) // equals to [a-zA-Z0-9]
      if (count[character]) {
        count[character] += 1;
      } else {
        count[character] = 1;
      }
  }
  return Object.values(count).filter((value) => {
    return value > 1;
  }).length;
};

console.log(countDuplicate("abcde")); // 0
console.log(countDuplicate("aabbcde")); // 2
console.log(countDuplicate("aabBcde")); // 2
console.log(countDuplicate("indivisibility")); // 1
console.log(countDuplicate("Indivisibilities")); // 2
console.log(countDuplicate("aA11")); // 2
console.log(countDuplicate("ABBA")); // 2
