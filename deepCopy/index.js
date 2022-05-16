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
