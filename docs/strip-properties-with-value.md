### stripPropertiesWithValue(_object, value_)

_@creuna/utils/strip-properties-with-value_

* `object`: object
* `value`: any
* returns: object

Returns a shallow copy of `object` with properties matching `value` removed

```js
const obj = { a: 1, b: 2 };
stripPropertiesWithValue(obj, 2); // { a: 1 }
```
