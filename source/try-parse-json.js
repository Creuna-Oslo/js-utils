function tryParseJson(possiblyJson, defaultValue) {
  try {
    return JSON.parse(possiblyJson);
  } catch (error) {
    return defaultValue;
  }
}

export default tryParseJson;
