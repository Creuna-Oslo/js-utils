### stripPropertiesWithKeys(_object, keys_)

_@creuna/utils/strip-properties-with-keys_

- `object`: object
- `value`: string[]
- returns: object

Returns a shallow copy of `object` with properties matching any of the `keys` removed

```js
const obj = { a: 1, b: 2, c: 3 };
stripPropertiesWithKeys(obj, ["b", "c"]); // { a: 1 }
```
