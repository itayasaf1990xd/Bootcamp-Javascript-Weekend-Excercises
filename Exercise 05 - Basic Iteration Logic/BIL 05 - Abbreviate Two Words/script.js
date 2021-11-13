const toShortName = (fullName) => {
  const abbreviateWords = fullName.split(" ");
  return (abbreviateWords[0][0] + "." + abbreviateWords[1][0]).toUpperCase();
};

console.log(toShortName("Biyakuga Higashiri")); // "B.H"
