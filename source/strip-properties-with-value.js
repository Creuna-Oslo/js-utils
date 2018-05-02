function stripPropertiesWithValue(object, value) {
  return Object.keys(object).reduce((accumulator, key) => {
    if (object[key] !== value) {
      Object.assign(accumulator, { [key]: object[key] });
    }

    return accumulator;
  }, {});
}

export default stripPropertiesWithValue;
