### pipeValue(_value, ...functions_)

_@creuna/utils/pipe-value_

* `value`: any value
* `functions`: any number of functions
* returns: any (the result of running `value` through the pipeline)

Similar to `pipe` but accepts a value as the first argument.

```js
pipeValue("a b c", removeSpaces, capitalize, reverseString); // "CBA"
```
