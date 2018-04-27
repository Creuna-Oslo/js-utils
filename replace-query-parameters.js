import fromQueryString from './from-query-string';
import toQueryString from './to-query-string';

function replaceQueryParameters(url, query) {
  const urlFragments = url.split('?');
  const baseUrl = urlFragments[0];
  const originalQueryString = urlFragments[1];
  const originalQuery = fromQueryString(originalQueryString);
  const newQuery = Object.assign({}, originalQuery, query);

  return `${baseUrl}${toQueryString(newQuery)}`;
}

export default replaceQueryParameters;
