import scrollingElement from './scrolling-element';
import scrollToPosition from './scroll-to-position';

function doScrollToElement(element, offset, duration) {
  const scrollPos =
    element.getBoundingClientRect().top + scrollingElement.scrollTop - offset;

  scrollToPosition(scrollPos, duration);
}

function scrollToElement(element, offset = 0, duration = 500, delay = 0) {
  window.isAutoScrolling = true;

  if (delay > 0) {
    window.autoScrollingTimoutId = setTimeout(() => {
      doScrollToElement(element, offset, duration);
    }, delay);
  } else {
    doScrollToElement(element, offset, duration);
  }
}

export default scrollToElement;
