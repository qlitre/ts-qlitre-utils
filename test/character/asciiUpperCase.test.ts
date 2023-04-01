import { asciiUpperCase } from "../../src/character/asciiUpperCase";

describe('asciiUpperCase', () => {
    test('return collect', () => {
      const result = asciiUpperCase();
      const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const arr=chars.split('')
      expect(result).toEqual(arr)
    });  
  });