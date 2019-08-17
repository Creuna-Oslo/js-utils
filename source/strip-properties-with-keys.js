import filterObject from './filter-object';

export default function stripPropertiesWithKeys(object = {}, keys = []) {
  return filterObject(object, key => !keys.includes(key));
}
