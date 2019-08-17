### filterObject(_object, predicate_)

_@creuna/utils/filter-object_

- `object`: object
- `value`: (key: string, value: any): boolean
- returns: object

Tests `predicate` (with `key` and `value`) for every entry in `object`. Returns a new object that contains every entry that passed the test.

```js
const obj = { a: 1, b: 2, c: 3 };
filterObject(obj, (key, value) => key !== "b" && value !== 3); // { a: 1 }
```
