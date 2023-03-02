import { accumulate } from '../../src/itertools/accumulate'


test('length=0', function () {
    const ret = accumulate([])
    const exp = []
    expect(JSON.stringify(ret)).toBe(JSON.stringify(exp));
})

test('length=1', function () {
    const ret = accumulate([5])
    const exp = [5]
    expect(JSON.stringify(ret)).toBe(JSON.stringify(exp));
})

test('length=3', function () {
    const ret = accumulate([1, 3, 5])
    const exp = [1, 4, 9]
    expect(JSON.stringify(ret)).toBe(JSON.stringify(exp));
})
