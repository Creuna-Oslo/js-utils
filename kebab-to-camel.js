import kebabToPascal from './kebab-to-pascal';

function kebabToCamel(s) {
  if ('string' !== typeof s) {
    return s;
  }

  const p = kebabToPascal(s);

  return p.substr(0, 1).toLowerCase() + p.substring(1);
}

export default kebabToCamel;
