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
