import stripPropertiesWithValue from './strip-properties-with-value';

function stripUndefined(object) {
  return stripPropertiesWithValue(object, undefined);
}

export default stripUndefined;
