export default function(object, otherObject) {
  return JSON.stringify(object) === JSON.stringify(otherObject);
}
