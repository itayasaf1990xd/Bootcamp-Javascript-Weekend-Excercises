const inhabitantsYear = (p0, percent, aug, p) => {
  percent = percent / 100 + 1;
  let yearCounter = 0;
  while (p0 < p) {
    p0 = p0 * percent + aug;
    yearCounter++;
  }
  return yearCounter;
};

console.log(inhabitantsYear(1500, 5, 100, 5000)); // Output: 15
console.log(inhabitantsYear(1500000, 2.5, 10000, 2000000)); // Output: 10
