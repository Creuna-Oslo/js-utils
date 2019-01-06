### pipe(_...functions_)

_@creuna/utils/pipe_

* `functions`: any number of functions
* returns: function

The pipe combines n functions, calling each function with the output of the last one. To actually execute the pipeline, call the returned function with a value. More on this concept [here](https://medium.com/front-end-weekly/pipe-and-compose-in-javascript-5b04004ac937).

```js
pipe(removeSpaces, capitalize, reverseString)("a b c"); // "CBA"
```
