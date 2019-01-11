### pipe(_value, ...functions_)

_@creuna/utils/pipe_

- `value`: any value
- `functions`: any number of functions
- returns: any (the result of running `value` through the pipeline)

A function that emulates the [pipeline operator](https://github.com/tc39/proposal-pipeline-operator). For more advanced composition stuff, see `createPipe`.

```js
pipeValue("a b c", removeSpaces, capitalize, reverseString); // "CBA"
```
