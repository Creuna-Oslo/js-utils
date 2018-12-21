import isRunningOnClient from './is-running-on-client';

function isElementInViewport(el, offset = 0, offsetX = offset) {
  if (!isRunningOnClient || !el) {
    return false;
  }

  const { top, left, bottom, right } = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    top + offset < windowHeight &&
    bottom >= offset &&
    left + offsetX < windowWidth &&
    right >= offsetX
  );
}

export default isElementInViewport;
