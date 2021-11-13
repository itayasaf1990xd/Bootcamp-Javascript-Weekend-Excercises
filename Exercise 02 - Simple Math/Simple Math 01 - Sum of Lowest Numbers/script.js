const numbers = [19, 5, 42, 2, 77];
const sumTwoSmallNumbers = (numbers) => {
  const sortNumbers = numbers.sort((a, b) => {
    return a - b;
  });
  return sortNumbers[0] + sortNumbers[1];
};
console.log(sumTwoSmallNumbers(numbers));
