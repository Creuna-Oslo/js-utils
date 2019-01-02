### toQueryString(_object[, options]_)

_@creuna/utils/to-query-string_

* `object`: object
* `options`: object || bool (bool is used for `encode`)
  * `encode`: bool (default `true`)
  * `prefix`: string (default `'?'`)
* returns: string

Creates a query string representation of `object`. Encodes object values by default.

```js
toQueryString({ param: "test", other: "test" });
// "?param=test&other=test"

toQueryString({ param: "test foo", other: "test" });
// "?param=test%20foo&other=test"

toQueryString({ param: "test foo", other: "test" }, { encode: false });
// "?param=test foo&other=test"

toQueryString({ param: "test", other: "test" }, { prefix: "#" });
// "#param=test&other=test"
```
