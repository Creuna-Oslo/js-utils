import tryParseJson from './try-parse-json';

export default function(object) {
  return tryParseJson(JSON.stringify(object), {});
}
