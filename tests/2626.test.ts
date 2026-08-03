import { describe, it, expect } from 'vitest';

describe('2626', () => {
    it('Should be able to register', { retry: 3 }, () => {
        expect(reduce([1, 2, 3, 4], (accum, curr) => accum + curr, 0)).toBe(10);
    });
});

type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
    let accum = init;

    for (let i = 0; i < nums.length; i++) {
        accum = fn(accum, nums[i]);
    }

    return accum;
}
