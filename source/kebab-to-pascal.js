function kebabToPascal(s) {
  if ('string' !== typeof s || s.length === 0) {
    return s;
  }

  let result = s.substr(0, 1).toUpperCase(),
    i = 1,
    len = s.length;

  for (; i < len; i++)
    if (s[i] === '-' && i + 1 !== len) {
      result += s[i + 1].toUpperCase();
      i++;
    } else result += s[i].toLowerCase();

  return result[0] !== '-' ? result : result.substr(1);
}

export default kebabToPascal;
