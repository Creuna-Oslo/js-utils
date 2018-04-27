import anyToKebab from './any-to-kebab';
import isRunningOnClient from './is-running-on-client';
import kebabToCamel from './kebab-to-camel';

function getData(dataAttributeName) {
  if (!isRunningOnClient) {
    return;
  }

  const kebabedName = anyToKebab(dataAttributeName);
  const node = document.querySelector(`[data-${kebabedName}]`);

  if (!node) {
    return;
  }

  return node.dataset[kebabToCamel(kebabedName)];
}

export default getData;
