const findIsUnique = (array) => {
  array.sort((a, b) => {
    return a - b;
  });
  return array[0] === array[1] ? array[array.length - 1] : array[0];
};

console.log(findIsUnique([1, 1, 1, 2, 1, 1])); // 2
console.log(findIsUnique([0, 0, 0.55, 0, 0])); // 0.55
console.log(findIsUnique([3, 2, 2, 2, 2])); // 3
console.log(findIsUnique([3, 3, 3, 3, 4])); // 4
