const tribonacci = (fibonacciNumbers, index) => {
  if (index <= 0 || fibonacciNumbers.forEach((number) => {return number < 0}) || fibonacciNumbers.length !== 3) {
    return [];
  }
  if (index < 3) {
    return fibonacciNumbers.slice(0, index);
  }
  while (fibonacciNumbers.length < index) {
    const fibonacciSize = fibonacciNumbers.length;
    fibonacciNumbers.push(fibonacciNumbers[fibonacciSize - 1] + fibonacciNumbers[fibonacciSize - 2] + fibonacciNumbers[fibonacciSize - 3]);
  }
  return fibonacciNumbers;
}

// 0, 0, 1, 1, 2, 4, 7, 13, 24, ...
console.log(tribonacci([0,0,1], 0)); // empty
console.log(tribonacci([0,0,1], 1)); // 0
console.log(tribonacci([0,0,1], 2)); // 0, 0
console.log(tribonacci([0,0,1], 3)); // 0, 0, 1
console.log(tribonacci([0,0,1], 4)); // 0, 0, 1, 1
console.log(tribonacci([0,0,1], 5)); // 0, 0, 1, 1, 2
console.log(tribonacci([0,0,1], 6)); // 0, 0, 1, 1, 2, 4
console.log(tribonacci([0,0,1], 7)); // 0, 0, 1, 1, 2, 4, 7
console.log(tribonacci([0,0,1], 8)); // 0, 0, 1, 1, 2, 4, 7, 13

// 1, 1 ,1, 3, 5, 9, 17, 31, ...
console.log(tribonacci([1,1,1], 0)); // empty
console.log(tribonacci([1,1,1], 1)); // 1
console.log(tribonacci([1,1,1], 2)); // 1, 1
console.log(tribonacci([1,1,1], 3)); // 1, 1, 1
console.log(tribonacci([1,1,1], 4)); // 1, 1, 1, 3
console.log(tribonacci([1,1,1], 5)); // 1, 1, 1, 3, 5
console.log(tribonacci([1,1,1], 6)); // 1, 1, 1, 3, 5, 9
console.log(tribonacci([1,1,1], 7)); // 1, 1, 1, 3, 5, 9, 17
console.log(tribonacci([1,1,1], 8)); // 1, 1, 1, 3, 5, 9, 17, 31