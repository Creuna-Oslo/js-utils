# Creuna js utils

[![npm version](https://img.shields.io/npm/v/@creuna/utils.svg?style=flat)](https://www.npmjs.com/package/@creuna/utils)
[![travis build](https://travis-ci.org/Creuna-Oslo/js-utils.svg?branch=master)](https://travis-ci.org/Creuna-Oslo/js-utils)

A collection of useful js utility functions.

## Importing

You can choose whether you want to import everyting or individual modules.

```js
// Import everyting:
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

### clamp(_value, minimum, maximum_)

_@creuna/utils/clamp_

* `value`: number
* `minimum`: number
* `maximum`: number
* returns: number

`clamp` can be used to keep a value between a min and max value.

### deepClone(_object_)

_@creuna/utils/deep-clone_

* `object`: object
* returns: object

Returns a deep clone of an object (any nested objects or arrays will also be cloned)

### fromQueryString(_queryString_)

_@creuna/utils/from-query-string_

* `queryString`: string,
* returns: object

Converts a query string into an object.

```js
fromQueryString("?param=test&other=test");
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

### isElementInViewport(node)

_@creuna/utils/is-element-in-viewport_

* `node`: DOM node
* returns: boolean

Checks whether the given element is fully visible in the viewport

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

### rangeMap(val, inMin, inMax, outMin, outMax)

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

### toQueryString(_object, encode_)

_@creuna/utils/to-query-string_

* `object`: object
* `encode`: bool (default `true`)
* returns: string

Creates a query string representation of `object`. Encodes object values by default.

### tryParseJson(_json, default_)

_@creuna/utils/try-parse-json_

* `json`: string (json)
* `default`: any
* returns: object if sucessfully parsed; `default` if unsuccessful
