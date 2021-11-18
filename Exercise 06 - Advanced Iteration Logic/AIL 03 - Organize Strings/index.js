const longestString = (string1, string2) => {
  const longestStringArray = Array.from(new Set(string1.concat(string2)));
  return longestStringArray.sort().join("");
};

console.log(longestString("xyaabbbccccdefww", "xxxxyyyyabklmopq")); // abcdefklmopqwxy
console.log(longestString("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")); // abcdefklmopqwxy