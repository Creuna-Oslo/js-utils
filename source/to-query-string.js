function toQueryString(queryObject, encode = true) {
  return Object.keys(queryObject)
    .filter(key => queryObject[key] !== undefined)
    .reduce((accumulator, currentKey, currentIndex) => {
      const currentValue = queryObject[currentKey];
      const separator = currentIndex === 0 ? '?' : '&';

      if (currentValue !== undefined) {
        accumulator = `${accumulator}${separator}${
          encode ? encodeURIComponent(currentKey) : currentKey
        }=${encode ? encodeURIComponent(currentValue) : currentValue}`;
      }

      return accumulator;
    }, '');
}

export default toQueryString;
