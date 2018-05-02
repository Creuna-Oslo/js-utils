import scrollingElement from './scrolling-element';

function doScrollToPosition(y, duration = 500) {
  clearTimeout(window.autoScrollingTimoutId);

  const initialY = scrollingElement.scrollTop;
  const baseY = (initialY + y) * 0.5;
  const difference = initialY - baseY;
  const startTime = performance.now();

  function step() {
    const normalizedTime = Math.min(
      (performance.now() - startTime) / duration,
      1
    );

    window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));

    if (normalizedTime < 1) {
      window.requestAnimationFrame(step);
    } else {
      setTimeout(() => {
        window.isAutoScrolling = false;
      }, 100);
    }
  }
  window.requestAnimationFrame(step);
}

function scrollToPosition(y, duration = 500, delay = 0) {
  window.isAutoScrolling = true;

  if (delay > 0) {
    window.autoScrollingTimoutId = setTimeout(() => {
      doScrollToPosition(y, duration);
    }, delay);
  } else {
    doScrollToPosition(y, duration);
  }
}

export default scrollToPosition;
