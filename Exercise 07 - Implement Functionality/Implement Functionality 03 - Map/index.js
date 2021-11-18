// Map Implementation
const mapImplementation = (array, callback) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback.length === 1) {
      result.push(callback(array[i]));
    } else if (callback.length === 2) {
      result.push(callback(array[i], i));
    } else if (callback.length === 3) {
      result.push(callback(array[i], i, array));
    } else {
      return undefined;
    }
  }
  return result;
};

console.log(
  mapImplementation([1, 2, 3, 4, 5], (element) => {
    return ++element;
  })
);