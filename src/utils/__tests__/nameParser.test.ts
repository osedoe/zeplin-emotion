import { nameParser } from "../nameParser";

describe('nameParser', () => {
  test('should return a string in camelCase format with whitespace and underscore, commas, etc', () => {
    const stringToParse = ' , Rectangle .with-_Background';
    const expected = 'rectangleWithBackground';
    expect(nameParser(stringToParse)).toBe(expected);
  });
});
