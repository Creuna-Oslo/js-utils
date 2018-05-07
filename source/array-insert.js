import clone from './deep-clone';

function insert(array, index, item) {
  if (!array) {
    throw new Error('There is no array to insert into');
  }

  const newArray = clone(array);

  newArray.splice(index, 0, item);

  return newArray;
}

export default insert;
