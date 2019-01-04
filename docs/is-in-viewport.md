### isInViewport(_node, offset[, offsetX]_)

_@creuna/utils/is-in-viewport_

* `node`: DOM node
* `offset`: number
* `offsetX`: number (defaults to `offset`)
* returns: boolean

Checks whether the given element is visible in the viewport. Positive numbers for `offset` mean more of the element needs to be in the viewport while negative numbers mean that the element can be outside of the viewport.
