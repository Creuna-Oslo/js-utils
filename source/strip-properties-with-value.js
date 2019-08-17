import filterObject from './filter-object';

export default function stripPropertiesWithValue(object, valueToStrip) {
  return filterObject(object, (_key, value) => value !== valueToStrip);
}
