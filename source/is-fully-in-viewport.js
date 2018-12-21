import isInViewPort from './is-in-viewport';

function isFullyInViewport(el) {
  return el ? isInViewPort(el, el.offsetHeight, el.offsetWidth) : false;
}

export default isFullyInViewport;
