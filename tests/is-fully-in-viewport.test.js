import proxyquire from 'proxyquire';
import test from 'ava';

const isFullyInViewport = proxyquire('../source/is-fully-in-viewport', {
  './is-in-viewport': {
    default: proxyquire('../source/is-in-viewport', {
      './is-running-on-client': { default: true }
    }).default
  }
}).default;

const createFakeElement = rect => ({
  getBoundingClientRect: () => rect,
  offsetHeight: 100,
  offsetWidth: 100
});

const template = (t, expected, rect, offset) => {
  global.window = {
    innerHeight: 500,
    innerWidth: 500
  };
  t.is(expected, isFullyInViewport(createFakeElement(rect), offset));
};

test('Without element', t => {
  t.is(false, isFullyInViewport());
});

const fullyVisible = { top: 0, bottom: 100, left: 0, right: 100 };
test('Fully visible', template, true, fullyVisible);

const partlyVisibleTop = { top: -50, bottom: 50, left: 0, right: 1 };
test('Partly visible top', template, false, partlyVisibleTop);

const partlyVisibleBot = { top: 450, bottom: 550, left: 0, right: 1 };
test('Partly visible bottom', template, false, partlyVisibleBot);

const partlyVisibleLeft = { top: 0, bottom: 1, left: -50, right: 50 };
test('Partly visible left', template, false, partlyVisibleLeft);

const partlyVisibleRight = { top: 0, bottom: 1, left: 50, right: 550 };
test('Partly visible right', template, false, partlyVisibleRight);
