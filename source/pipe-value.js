import pipe from './pipe';

export default (value, ...functions) => pipe(...functions)(value);
