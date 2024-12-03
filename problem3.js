function deleteInvalids(array) {
  if (Array.isArray(array) === false) {
    return "Invalid";
  }
  let returnArray = [];
  for (const char of array) {
    // console.log(char);
    if (typeof char === "number" && isNaN(char) === false) {
      returnArray.push(char);
    }
  }
  return returnArray;
}

console.log(
  deleteInvalids([42, "Hello, World!", 50, 30, true, null, NaN, undefined])
);

console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({ num: [1, 2, 3] }));
