import { divisionMod } from '../../src/mathematics/divisionMod'

describe('divisionMod', () => {
    test('divides correctly', () => {
        expect(divisionMod(10n, 3n, 1000000007n).toString()).toEqual('333333339');
        expect(divisionMod(987654321n, 123456789n, 1000000007n).toString()).toEqual('167701868');
        expect(divisionMod(123456789n, 987654321n, 1000000007n).toString()).toEqual('203935601');
    });

    test('handles 0 correctly', () => {
        expect(divisionMod(0n, 123456789n, 1000000007n).toString()).toEqual('0');
    });

    test('handles mod = 1 correctly', () => {
        expect(divisionMod(123456789n, 987654321n, 1n).toString()).toEqual('0');
    });
});