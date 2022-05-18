*tldr*: this class in intended for paginators

### Init
Let's create the arr, and set his length as follows.
```js
let table = new LightWeightArr(10) // 10 is the expected length
```

Now `table` looks something like this `[empty * 10]`

### Insert

```js
let index = 0;
let values = ["first", "second", "third"];
table.insert(index, values);
```
And let's run this also:
```js
let index = 9;
let value = "tenth"
table.insert(index, value);
```

Now our `table` looks like this:
```js
["first", "second", "third", empty * 6, "tenth"]
```

### doesContainEmpties
this function is for you to know if you need to load data from the server, or the data already exists

let's say our table is: `["first", "second", "third", empty * 6, "tenth"]`
```js
table.doesContainEmpties(0, 2) // false
table.doesContainEmpties(3, 8) // true
table.doesContainEmpties(9, 10)) // false
table.doesContainEmpties(200, 215)) // true
```

### replace
sometimes you want to completely replace the array, this is your function.

before: `table = ["first", "second", "third", empty * 6, "tenth"]`

```js
let newExpectedLength = 15; // default is 0
let newValues = ["third", "forth"]; // default is []
let insertNewValuesAtIndex = 2; // default is 0
table.replace(newExpectedLength, newValues, insertNewValuesAtIndex)
```

after: `table = [ empty * 2, 'third', 'forth', empty * 11 ]`
