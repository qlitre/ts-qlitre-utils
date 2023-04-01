import { asciiLowerCase } from "../../src/character/asciiLowerCase";

describe('asciiLowerCase', () => {
    test('return collect', () => {
      const result = asciiLowerCase();
      const chars='abcdefghijklmnopqrstuvwxyz'
      const arr=chars.split('')
      expect(result).toEqual(arr)
    });  
  });