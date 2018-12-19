### fromQueryString(_queryString[, prefix]_)

_@creuna/utils/from-query-string_

* `queryString`: string
* `prefix`: string (default `'?'`)
* returns: object

Converts a query string into an object.

```js
fromQueryString("?param=test&other=test");
// { param: "test", other: "test" }

fromQueryString("#param=test&other=test", "#");
// { param: "test", other: "test" }
```
