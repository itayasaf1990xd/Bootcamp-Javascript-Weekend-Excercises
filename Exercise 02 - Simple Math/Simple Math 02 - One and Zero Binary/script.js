const binaryToDecimal = (binaryNumber) => {
  let sum = 0;
  const reverse = binaryNumber.concat().reverse();
  for (let i = 0; i < reverse.length; i++) {
    if (reverse[i] === 1) {
      sum += 2 ** i;
    }
  }
  return sum;
}

console.log(binaryToDecimal([0, 0, 0, 1])); // 1
console.log(binaryToDecimal([0, 0, 1, 0])); // 2
console.log(binaryToDecimal([0, 1, 0, 1])); // 5
console.log(binaryToDecimal([1, 0, 0, 1])); // 9
console.log(binaryToDecimal([1, 0, 1, 1])); // 11
console.log(binaryToDecimal([1, 1, 1, 1])); // 15
