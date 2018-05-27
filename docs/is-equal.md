### isEqual(_a, b_)

_@creuna/utils/is-equal_

* `a`: any
* `b`: any
* returns: boolean

Checks whether `a` and `b` are equal (deep comparison for objects and arrays). This uses `JSON.stringify`, so be aware that array elements or object values that are `undefined` will be stripped.
