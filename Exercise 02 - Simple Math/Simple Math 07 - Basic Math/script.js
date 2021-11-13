const fourBasicOperation = (operation, value1, value2) => {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "Not a valid operation";
  }
};

console.log(fourBasicOperation("+", 4, 7)); // Output: 11
console.log(fourBasicOperation("-", 15, 18)); // Output: -3
console.log(fourBasicOperation("*", 5, 5)); // Output: 25
console.log(fourBasicOperation("/", 49, 7)); // Output: 7
