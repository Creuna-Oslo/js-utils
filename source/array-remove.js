import clone from './deep-clone';

function remove(array, index) {
  if (!array) {
    throw new Error('There is no array to remove the item from');
  }

  const newArray = clone(array);

  newArray.splice(index, 1);

  return newArray;
}

export default remove;
