### arrayInsert(array, index, item)

_@creuna/utils/array-insert_

* `array`: array
* `index`: number
* `item`: any
* returns: array

Returns a new array that is a deep clone of the one passed in containing the new item at the specified index.

```js
arrayInsert(["a", "b", "c"], 1, "x"); // ['a', 'x', 'b', 'c']
```
