import { expect, test } from 'vitest';

test('1. Two Sum', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

function twoSum(nums: number[], target: number): number[] {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map.has(num)) {
            return [map.get(num), i];
        }

        map.set(target - num, i);
    }

    return [];
}
