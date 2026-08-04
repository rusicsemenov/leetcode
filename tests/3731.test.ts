import { test, expect } from 'vitest';

test('3731', () => {
    expect(findMissingElements([1, 2, 3, 5])).toEqual([4]);
    expect(findMissingElements([1, 4, 2, 5])).toEqual([3]);
    expect(findMissingElements([7, 8, 6, 9])).toEqual([]);
    expect(findMissingElements([5, 1])).toEqual([2, 3, 4]);
});

function findMissingElements(nums: number[]): number[] {
    const numSet = new Set(nums);
    const max = Math.max(...nums);
    const min = Math.min(...nums);

    const result = [];

    for (let i = min + 1; i < max; i++) {
        if (numSet.has(i)) continue;

        result.push(i);
    }
    return result;
}
