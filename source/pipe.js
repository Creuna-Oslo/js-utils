export default (...functions) => x =>
  functions.reduce((accumulator, func) => func(accumulator), x);
