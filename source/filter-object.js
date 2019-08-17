export default function filterObject(object = {}, predicate = () => true) {
  return Object.entries(object).reduce(
    (accumulator, [key, value]) =>
      predicate(key, value)
        ? Object.assign(accumulator, { [key]: value })
        : accumulator,
    {}
  );
}
