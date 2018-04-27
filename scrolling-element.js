import isRunningOnClient from './is-running-on-client';

// NOTE: https://stackoverflow.com/questions/45061901/chrome-61-body-doesnt-scroll
const scrollingElement = isRunningOnClient
  ? document.scrollingElement || document.documentElement || document.body
  : undefined;

export default scrollingElement;
