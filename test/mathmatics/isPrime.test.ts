import { isPrime } from '../../src/mathmatics/isPrime'

test('1 is false', function () {
    expect(isPrime(1)).toBe(false);
})

test('2 is true', function () {
    expect(isPrime(2)).toBe(true);
})

test('3 is true', function () {
    expect(isPrime(3)).toBe(true);
})

test('7 is true', function () {
    expect(isPrime(7)).toBe(true);
})

test('8 is false', function () {
    expect(isPrime(8)).toBe(false);
})
