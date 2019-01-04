import proxyquire from 'proxyquire';
import test from 'ava';

const isInViewport = proxyquire('../source/is-in-viewport', {
  './is-running-on-client': { default: true }
}).default;

const createFakeElement = rect => ({
  getBoundingClientRect: () => rect
});

const template = (t, expected, rect, offset) => {
  global.window = {
    innerHeight: 500,
    innerWidth: 500
  };
  t.is(expected, isInViewport(createFakeElement(rect), offset));
};

test('Without element', t => {
  t.is(false, isInViewport());
});

const offScreenTop = { top: -200, bottom: -100, left: 0, right: 1 };
test('Off screen top', template, false, offScreenTop);
test('Off screen top (offset)', template, true, offScreenTop, -200);

const offScreenBot = { top: 600, bottom: 700, left: 0, right: 1 };
test('Off screen bottom', template, false, offScreenBot);
test('Off screen bottom (offset)', template, true, offScreenBot, -200);

const offScreenLeft = { top: 0, bottom: 1, left: -200, right: -100 };
test('Off screen left', template, false, offScreenLeft);
test('Off screen left (offset)', template, true, offScreenLeft, -200);

const offScreenRight = { top: 0, bottom: 1, left: 600, right: 700 };
test('Off screen right', template, false, offScreenRight);
test('Off screen right (offset)', template, true, offScreenRight, -200);

const partlyVisibleTop = { top: -50, bottom: 50, left: 0, right: 1 };
test('Partly visible top', template, true, partlyVisibleTop);
test('Partly visible top (offset)', template, false, partlyVisibleTop, 60);

const partlyVisibleBot = { top: 450, bottom: 550, left: 0, right: 1 };
test('Partly visible bottom', template, true, partlyVisibleBot);
test('Partly visible bottom (offset)', template, false, partlyVisibleBot, 60);

const partlyVisibleLeft = { top: 0, bottom: 1, left: -50, right: 50 };
test('Partly visible left', template, true, partlyVisibleLeft);
test('Partly visible left (offset)', template, false, partlyVisibleLeft, 60);

const partlyVisibleRight = { top: 0, bottom: 1, left: 50, right: 550 };
test('Partly visible right', template, true, partlyVisibleRight);
test('Partly visible right (offset)', template, false, partlyVisibleRight, 60);
