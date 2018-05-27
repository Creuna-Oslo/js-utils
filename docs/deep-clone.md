### deepClone(_thing_)

_@creuna/utils/deep-clone_

* `thing`: object | array
* returns: object | array

Returns a deep clone of an object (any nested objects or arrays will also be cloned). Be aware that this uses JSON.stringify, meaning that any array elements or object values that are `undefined` will be stripped
