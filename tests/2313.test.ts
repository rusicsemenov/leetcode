import { test, expect } from 'vitest';

test('2913. Subarrays Distinct Element Sum of Squares I', () => {
    expect(sumCounts([1, 2, 1])).toEqual(15);
    expect(sumCounts([1, 1])).toEqual(3);
});

function sumCounts(nums: number[]): number {
    const length = nums.length;
    let res = 0;

    for (let start = 0; start < length; start++) {
        const seen = new Set<number>();

        for (let end = start; end < length; end++) {
            seen.add(nums[end]);
            res += seen.size * seen.size;
        }
    }

    return res;
}
