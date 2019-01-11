# Creuna JS utils

[![npm version](https://img.shields.io/npm/v/@creuna/utils.svg?style=flat)](https://www.npmjs.com/package/@creuna/utils)
[![travis build](https://travis-ci.org/Creuna-Oslo/js-utils.svg?branch=master)](https://travis-ci.org/Creuna-Oslo/js-utils)

A collection of useful JS utility functions.

## Importing

You can choose whether you want to import everyting or individual modules.

```js
// Import everything:
import utils from "@creuna/utils";

// Import single:
import rangeMap from "@creuna/utils/range-map";
```

## Functions

### anyToKebab(_input_)

_@creuna/utils/any-to-kebab_

* `input`: string
* returns: string

```js
anyToKebab("CamelCaseString"); // "camel-case-string"
```

### arrayInsert(_array, index, item_)

_@creuna/utils/array-insert_

* `array`: array
* `index`: number
* `item`: any
* returns: array

Returns a new array that is a deep clone of the one passed in containing the new item at the specified index.

```js
arrayInsert(["a", "b", "c"], 1, "x"); // ['a', 'x', 'b', 'c']
```

### arrayMove(_array, oldIndex, newIndex_)

_@creuna/utils/array-move_

* `array`: array
* `oldIndex`: number
* `newIndex`: number
* returns: array

Returns a new array that is a deep clone of the one passed in with the item at `oldIndex` moved to `newIndex`.

```js
arrayInsert(["a", "b", "c"], 1, 2); // ['a', 'c', 'b']
```

### arrayRemove(_array, index_)

_@creuna/utils/array-remove_

* `array`: array
* `index`: number
* returns: array

Returns a new array that is a deep clone of the one passed in with the item at `index` removed.

```js
arrayInsert(["a", "b", "c"], 1); // ['a', 'c']
```

### clamp(_value, minimum, maximum_)

_@creuna/utils/clamp_

* `value`: number
* `minimum`: number
* `maximum`: number
* returns: number

`clamp` can be used to keep a value between a min and max value.

### createPipe(_...functions_)

_@creuna/utils/create-pipe_

- `functions`: any number of functions
- returns: function

The pipe combines n functions, calling each function with the output of the last one. To actually execute the pipeline, call the returned function with a value. More on this concept [here](https://medium.com/front-end-weekly/pipe-and-compose-in-javascript-5b04004ac937).

```js
pipe(
  removeSpaces,
  capitalize,
  reverseString
)("a b c"); // "CBA"
```

### deepClone(_thing_)

_@creuna/utils/deep-clone_

* `thing`: object | array
* returns: object | array

Returns a deep clone of an object (any nested objects or arrays will also be cloned). Be aware that this uses JSON.stringify, meaning that any array elements or object values that are `undefined` will be stripped

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

### getData(_dataAttributeName_)

_@creuna/utils/get-data_

* `dataAttributeName`: string
* returns: string

Returns the value of the first DOM node with `dataAttributeName`

```html
<body>
    <div data-some-attribute="true"></div>
</body>
```

```js
getData("some-attribute"); // "true"
```

### isEqual(_a, b_)

_@creuna/utils/is-equal_

* `a`: any
* `b`: any
* returns: boolean

Checks whether `a` and `b` are equal (deep comparison for objects and arrays). This uses `JSON.stringify`, so be aware that array elements or object values that are `undefined` will be stripped.

### isFullyInViewport(_node_)

_@creuna/utils/is-fully-in-viewport_

* `node`: DOM node
* returns: boolean

Checks whether the given element is fully visible in the viewport. This is a special case of `isInViewport` where the offsets are the dimensions of the element.

### isInViewport(_node, offset[, offsetX]_)

_@creuna/utils/is-in-viewport_

* `node`: DOM node
* `offset`: number
* `offsetX`: number (defaults to `offset`)
* returns: boolean

Checks whether the given element is visible in the viewport. Positive numbers for `offset` mean more of the element needs to be in the viewport while negative numbers mean that the element can be outside of the viewport.

### isRunningOnClient: _bool_

_@creuna/utils/is-running-on-client_

* exports: bool

Exports a boolean indicating whether or not the code is running on the client.

```js
import isRunningOnClient from "@creuna/utils/is-running-on-client"; // true || false
```

### kebabToCamel(_kebabString_)

_@creuna/utils/kebab-to-camel_

* `kebabString`: string (kebab-case formatted)
* returns: string (camelCase formatted)

```js
kebabToCamel("kebab-string"); // "kebabString"
```

### kebabToPascal(_kebabString_)

_@creuna/utils/kebab-to-pascal_

* `kebabString`: string (kebab-case formatted)
* returns: string (PascalCase formatted)

```js
kebabToPascal("kebab-string"); // "KebabString"
```

### pipe(_value, ...functions_)

_@creuna/utils/pipe_

- `value`: any value
- `functions`: any number of functions
- returns: any (the result of running `value` through the pipeline)

A function that emulates the [pipeline operator](https://github.com/tc39/proposal-pipeline-operator). For more advanced composition stuff, see `createPipe`.

```js
pipeValue("a b c", removeSpaces, capitalize, reverseString); // "CBA"
```

### rangeMap(_val, inMin, inMax, outMin, outMax_)

_@creuna/utils/range-map_

* `val`: number
* `inMin`: number
* `inMax`: number
* `outMin`: number
* `outMax`: number
* returns: number

Re-maps a number from one numeric range onto another.

```js
rangeMap(0.5, 0, 1, 0, 100); // 50
```

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

### scrollToElement(_node, offset, duration, delay_)

_@creuna/utils/scroll-to-element_

* `node`: DOM node
* `offset`: number (default `0` px)
* `duration`: number (default `500` ms)
* `delay`: number (default `0` ms)

Finds the scroll position of `node` and scrolls it into view (animated)

### scrollToPosition(_y, duration_)

_@creuna/utils/scroll-to-position_

* `y`: number
* `duration`: number (default `500` ms)

### scrollingElement: _node_

_@creuna/utils/scrolling-element_

Get the scrolling element (useful because some browsers use `document.scrollingElement`, some use `document.documentElement` and others use `document.body`. When not running on client, `scrollingElement` is `undefined`.

```js
import scrollingElement from "@creuna/utils/scrolling-element";

if (scrollingElement) {
  scrollingElement.scrollTo(0, 100);
}
```

### stripPropertiesWithValue(_object, value_)

_@creuna/utils/strip-properties-with-value_

* `object`: object
* `value`: any
* returns: object

Returns a shallow copy of `object` with properties matching `value` removed

```js
const obj = { a: 1, b: 2 };
stripPropertiesWithValue(obj, 2); // { a: 1 }
```

### stripUndefined(_object_)

_@creuna/utils/strip-undefined_

* `object`: object
* returns: object

Returns a shallow copy of `object` with properties matching `undefined` removed

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

### tryParseJson(_json, default_)

_@creuna/utils/try-parse-json_

* `json`: string (json)
* `default`: any
* returns: object if sucessfully parsed; `default` if unsuccessful
