import { expect, test } from 'vitest';

test('Q1. Can Make Arithmetic Progression From Sequence', () => {
    expect(canMakeArithmeticProgression([3, 5, 1])).toBe(true);
    expect(canMakeArithmeticProgression([1, 2, 4])).toBe(false);
    expect(canMakeArithmeticProgression([0, 0, 1])).toBe(false);
});

function canMakeArithmeticProgression(arr: number[]): boolean {
    const sortedArr = arr.sort((a, b) => a - b);
    let diff = undefined;
    for (let i = 1; i < sortedArr.length; i++) {
        const prev = sortedArr[i - 1];
        const curr = sortedArr[i];

        if (!Number.isNaN(prev) && !Number.isNaN(curr)) {
            if (typeof diff !== 'undefined' && prev - curr !== diff) {
                return false;
            }
            diff = prev - curr;
        }
    }

    return true;
}
