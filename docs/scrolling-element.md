### scrollingElement: _node_

_@creuna/utils/scrolling-element_

Get the scrolling element (useful because some browsers use `document.scrollingElement`, some use `document.documentElement` and others use `document.body`. When not running on client, `scrollingElement` is `undefined`.

```js
import scrollingElement from "@creuna/utils/scrolling-element";

if (scrollingElement) {
  scrollingElement.scrollTo(0, 100);
}
```
