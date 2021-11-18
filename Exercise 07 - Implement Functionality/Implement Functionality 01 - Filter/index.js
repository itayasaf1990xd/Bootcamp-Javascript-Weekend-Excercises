// Filter Implementation
const filterImplementation = (array, callback) => {
  const returnArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback.length === 1) {
      if (callback(array[i])) {
        returnArray.push(array[i]);
      }
    } else if (callback.length === 2) {
      if (callback(array[i], i)) {
        returnArray.push(arr[i]);
      }
    } else if (callback.length === 3) {
      if (callback(array[i], i, array)) {
        returnArray.push(array[i]);
      } else {
        return undefined;
      }
    }
  }
  return returnArray;
};

console.log(
  filterImplementation([1, 2, 3, 4, 5], (element) => {
    return element % 2 === 0;
  })
);