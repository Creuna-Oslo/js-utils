### replaceQueryParameters(_url, query_)

_@creuna/utils/replace-query-parameters_

* `url`: string
* `query`: object
* returns: string

Adds or replaces query parameters in `url`.

```js
replaceQueryParameters("http://lorem.com?param1=a&param2=b", {
  param2: "BBB",
  param3: "CCC"
});
// "http://lorem.com?param1=a&param2=CCC&param3=DDD"
```
