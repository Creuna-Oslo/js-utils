function anyToKebab(s) {
  if ('string' !== typeof s) {
    return s;
  }

  let result = '',
    i = 0,
    len = s.length;

  for (; i < len; i++) {
    const lowerCased = s[i].toLowerCase();
    const upperCased = s[i].toUpperCase();

    if (lowerCased !== upperCased && s[i] === upperCased) {
      result += '-' + lowerCased;
    } else {
      result += lowerCased;
    }
  }

  return result[0] !== '-' ? result : result.substr(1);
}

export default anyToKebab;
