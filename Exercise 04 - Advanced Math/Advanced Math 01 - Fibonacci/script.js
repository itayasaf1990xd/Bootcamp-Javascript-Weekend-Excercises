const fibonacci = (startNumber, index) => {
  const fibonacciNumbers = [startNumber, 1];
  if (index === 1 && startNumber === 0) {
    return 0;
  }
  while (fibonacciNumbers.length < index) {
    const fibonacciSize = fibonacciNumbers.length;
    fibonacciNumbers.push(fibonacciNumbers[fibonacciSize - 2] + fibonacciNumbers[fibonacciSize - 1]);
  }
  return fibonacciNumbers[fibonacciNumbers.length - 1];
};

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
console.log(fibonacci(1, 1)); // Output: 1
console.log(fibonacci(1, 2)); // Output: 1
console.log(fibonacci(1, 3)); // Output: 2
console.log(fibonacci(1, 4)); // Output: 3
console.log(fibonacci(1, 5)); // Output: 5
console.log(fibonacci(1, 6)); // Output: 8
console.log(fibonacci(1, 7)); // Output: 13
console.log(fibonacci(1, 8)); // Output: 21
console.log(fibonacci(1, 9)); // Output: 34

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
console.log(fibonacci(0, 1)); // Output: 0
console.log(fibonacci(0, 2)); // Output: 1
console.log(fibonacci(0, 3)); // Output: 1
console.log(fibonacci(0, 4)); // Output: 2
console.log(fibonacci(0, 5)); // Output: 3
console.log(fibonacci(0, 6)); // Output: 5
console.log(fibonacci(0, 7)); // Output: 8
console.log(fibonacci(0, 8)); // Output: 13
console.log(fibonacci(0, 9)); // Output: 21
