// forEach Implementation
const forEachImplementation = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback.length === 1) {
      callback(array[i]);
    } else if (callback.length === 2) {
      callback(array[i], i);
    } else if (callback.length === 3) {
      callback(array[i], i, array);
    } else {
      return undefined;
    }
  }
};

console.log(
  forEachImplementation([1, 2, 3, 4, 5], (element) => {
    console.log(element);
  })
);