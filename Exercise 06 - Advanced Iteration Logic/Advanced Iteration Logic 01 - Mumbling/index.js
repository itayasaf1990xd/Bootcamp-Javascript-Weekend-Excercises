const accum = (sentence) => {
  const characters = sentence.toUpperCase().split("");
  return characters
    .map((character, index) => {
      return character + character.toLowerCase().repeat(index);
    })
    .join("-");
};

console.log(accum("abcd")); // A-Bb-Ccc-Dddd
console.log(accum("RqaEzty")); // R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy
console.log(accum("cwAt")); // C-Ww-Aaa-Tttt
