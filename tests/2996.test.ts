import { test, expect } from 'vitest';

test('2996. Smallest Missing Integer Greater Than Sequential Prefix Sum', () => {
    expect(missingInteger([1, 2, 3, 2, 5])).toBe(6);
    expect(missingInteger([3, 4, 5, 1, 12, 14, 13])).toBe(15);
    expect(missingInteger([29, 30, 31, 32, 33, 34, 35, 36, 37])).toBe(297);
    expect(missingInteger([14, 9, 6, 9, 7, 9, 10, 4, 9, 9, 4, 4])).toBe(15);
});

function missingInteger(nums: number[]): number {
    let res: number = -Infinity;

    let prevNum = -Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];

        if (current !== prevNum + 1 && i > 0) {
            break;
        }
        sum += current;
        prevNum = current;
        res = Math.max(res, sum);
    }

    const set = new Set(nums);
    while (set.has(res)) {
        res++;
    }
    return res;
}
