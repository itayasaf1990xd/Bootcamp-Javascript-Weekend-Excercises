const trueValue = true;
const falseValue = false;

const trueOrFalse = (isBoolean) => {
  return isBoolean ? "yes" : "no";
};

console.log(trueOrFalse(trueValue));
console.log(trueOrFalse(falseValue));
