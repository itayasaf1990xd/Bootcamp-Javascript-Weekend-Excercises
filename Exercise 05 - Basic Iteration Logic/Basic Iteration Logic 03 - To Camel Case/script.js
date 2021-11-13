const toCamelCase = (sentence) => {
  const words = sentence.split(/[-_]/);
  for (let i = 1; i < words.length; i += 1) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join("");
};

console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"
