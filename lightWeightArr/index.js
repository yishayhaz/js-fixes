class LightWeightArr {
  constructor(expectedLength = 0) {
    this.arr = Array(expectedLength);
  }
  insert(startIndex = 0, values = []) {
    if (!Array.isArray(values)) values = [values];
    values.forEach((value, index) => {
      this.arr[startIndex + index] = value;
    });
  }
  replace(expectedLength = 0, values = [], index = 0) {
    this.arr = Array(expectedLength);
    this.insert(index, values);
  }
  doesContainEmpties(startIndex = 0, endIndex = 0) {
    let slicedArr = this.arr.slice(startIndex, endIndex);
    if (!slicedArr.length) return true;
    return this.arr.slice(startIndex, endIndex).includes(undefined);
  }
}