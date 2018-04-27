function fromQueryString(queryString) {
  if (!queryString) {
    return {};
  }

  return queryString
    .replace('?', '')
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
