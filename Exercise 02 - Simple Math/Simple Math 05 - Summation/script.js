const summation = (number) => {
  return Array.from(new Array(number), (value, index) => index + 1).reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
};

console.log(summation(2)); // 3
console.log(summation(8)); // 36
console.log(summation(1)); // 1
