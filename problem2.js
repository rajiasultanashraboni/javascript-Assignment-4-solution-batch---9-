function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }
  const checkArray = ["a", "e", "i", "o", "u", "y", "w"];
  let lastLetter = name.slice(-1).toLowerCase();
  const result = checkArray.includes(lastLetter);
  return result ? "Good Name" : "Bad Name";
}

console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
