function parseString(fragment) {
  const regex = /[^0-9a-z ]/gi;
  const afterRegEx = fragment.replace(regex, ' ');
  const arrayOfWords = afterRegEx
    .trim()
    .split(' ')
    .map(word =>
      (word.charAt(0).toUpperCase()) + word.slice(1));

  const firstWordParsed = arrayOfWords[0].charAt(0).toLowerCase() + arrayOfWords[0].slice(1);

  const parsedString = arrayOfWords.splice(1, arrayOfWords.length);
  parsedString.unshift(firstWordParsed);

  return parsedString.join('');
}

module.exports = {
  parseString
};
