function fromQueryString(queryString, prefix = '?') {
  if (!queryString) {
    return {};
  }

  return queryString
    .replace(prefix, '')
    .split('&')
    .reduce((accumulator, currentPair) => {
      const data = currentPair.split('=');

      if (data.length === 2) {
        accumulator[decodeURIComponent(data[0])] = decodeURIComponent(data[1]);
      }

      return accumulator;
    }, {});
}

export default fromQueryString;
