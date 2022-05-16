var yasa = {
  hair: "pink",
  height: "1.63m",
  weight: "57kg",
};
var anna = deepCopy(yasa);

anna.hair = "black";

console.log("yasa", yasa);
console.log("anna", anna);

function deepCopy(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }
  if (Object(obj) === obj) {
    let newObj = {};
    Object.keys(obj).forEach((key) => (newObj[key] = deepCopy(obj[key])));
    return newObj;
  }
  return obj;
}
