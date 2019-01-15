import createPipe from './create-pipe';

export default (value, ...functions) => createPipe(...functions)(value);
