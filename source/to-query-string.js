import stripUndefined from './strip-undefined';

const defaultOptions = {
  encode: true,
  prefix: '?'
};

const getOptionsToUse = options => {
  // NOTE: For backwards compatibility with previous API
  if (typeof options === 'boolean') {
    return Object.assign({}, defaultOptions, {
      encode: options
    });
  }

  return Object.assign({}, defaultOptions, stripUndefined(options));
};

function toQueryString(queryObject, options = {}) {
  const optionsToUse = getOptionsToUse(options);

  return Object.keys(queryObject)
    .filter(key => queryObject[key] !== undefined)
    .reduce((accumulator, currentKey, currentIndex) => {
      const currentValue = queryObject[currentKey];

      if (currentValue !== undefined) {
        const separator = currentIndex === 0 ? optionsToUse.prefix : '&';
        const [key, value] = optionsToUse.encode
          ? [encodeURIComponent(currentKey), encodeURIComponent(currentValue)]
          : [currentKey, currentValue];

        accumulator = `${accumulator}${separator}${key}=${value}`;
      }

      return accumulator;
    }, '');
}

export default toQueryString;
