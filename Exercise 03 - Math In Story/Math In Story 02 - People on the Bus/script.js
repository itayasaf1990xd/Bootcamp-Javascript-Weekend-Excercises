const PeopleLeftOnTheBus = (stations) => {
  let people = 0;
  stations.forEach((station) => {
    people += station[0] - station[1];
  });
  return people;
};

console.log(
  PeopleLeftOnTheBus([
    [1, 0],
    [3, 1],
  ])
); // Output: 3
console.log(
  PeopleLeftOnTheBus([
    [3, 0],
    [0, 3],
    [1, 1],
  ])
); // Output: 0
console.log(
  PeopleLeftOnTheBus([
    [3, 0],
    [0, 3],
    [1, 0],
  ])
); // Output: 1
