const findNextSquare = (number) => {
  const root = Math.sqrt(number);
  return Number.isInteger(root) ? Math.pow(root + 1, 2) : -1;
};
console.log(findNextSquare(121)); // 144
console.log(findNextSquare(625)); // 676
console.log(findNextSquare(114)); // -1
