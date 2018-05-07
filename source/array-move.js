import clone from './deep-clone';

function move(array, oldIndex, newIndex) {
  if (!array) {
    throw new Error('There is no array to move the item in');
  }

  const newArray = clone(array);

  if (newIndex >= newArray.length) {
    var k = newIndex - newArray.length;
    while (k-- + 1) {
      newArray.push(undefined);
    }
  }

  newArray.splice(newIndex, 0, newArray.splice(oldIndex, 1)[0]);

  return newArray;
}

export default move;
