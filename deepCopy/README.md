*tldr*: this function copies objects without shallow-copying.

## Quick example
```js
function deepCopy(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item));
  }
  if(Object(obj) === obj) {
    let newObj = {};
    Object.keys(obj).forEach(key => newObj[key] = deepCopy(obj[key]));
    return newObj;
  }
  return obj;
}

let yasa = ['female', { hair: 'pink', eyes: [ 'green', 'brown' ]}];
let anna = deepCopy(yasa);

anna[1].eyes.push("purple")

console.log(yasa) // ['female', { hair: 'pink', eyes: [ 'green', 'brown' ]}];
console.log(anna) // ['female', { hair: 'pink', eyes: [ 'green', 'brown', 'purple' ]}];
```

## flaws in built-in methods

#### Using JSON.parse && JSON.stringify
```js
JSON.parse(JSON.stringify(obj))
```
This approach is very risky (and ugly), as those methods tend to break certain values (html tags for example).

#### Destructuring
```js
{ ...obj }, Object.assign([], obj)
```
it's just copying the first layer, but if you have nested objects, it's shallow-copy again.
