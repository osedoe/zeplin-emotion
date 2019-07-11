const { parseString } = require("../parseString");

describe('parseString', () => {
  test('should return a string in camelCase format with whitespace and underscore, commas, etc', () => {
    const stringToParse = ' , Rectangle .with-_Background';
    const expected = 'rectangleWithBackground';
    parseString
    expect(parseString(stringToParse)).toBe(expected);
  });
});
