const maskify = (password) => {
  maskPassword = `${password}`;
  const passwordLength = maskPassword.length;
  return passwordLength <= 4
    ? maskPassword
    : "#".repeat(passwordLength - 4) +
        maskPassword.substring(passwordLength - 4);
};

console.log(maskify("4556364607935616")); // ############5616
console.log(maskify("64607935616")); // #######5616
console.log(maskify("1")); // 1
console.log(maskify("")); // empty
console.log(maskify("     5")); // ##   5
console.log(maskify("1234")); // 1234
