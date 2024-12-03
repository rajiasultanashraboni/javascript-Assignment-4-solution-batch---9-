function password(obj) {
  if (
    obj.siteName === undefined ||
    obj.name === undefined ||
    obj.birthYear === undefined ||
    obj.birthYear.toString().length !== 4
  ) {
    return "Invalid";
  }
  let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
  let passwordString = capitalSiteName + "#" + obj.name + "@" + obj.birthYear;
  return passwordString;
}

console.log(
  password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "masha", birthYear: 2002 }));
