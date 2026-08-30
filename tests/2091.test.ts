import { test, expect } from 'vitest';

test('2091. Removing Minimum and Maximum From Array', () => {
    expect(minimumDeletions([2, 10, 7, 5, 4, 1, 8, 6])).toBe(5);
    expect(minimumDeletions([0, -4, 19, 1, 8, -2, -3, 5])).toBe(3);
    expect(minimumDeletions([101])).toBe(1);
});

function minimumDeletions(nums: number[]): number {
    const minIndex = nums.indexOf(Math.min(...nums));
    const maxIndex = nums.indexOf(Math.max(...nums));
    const n = nums.length;

    const removeFromLeft = Math.max(minIndex, maxIndex) + 1;
    const removeFromRight = n - Math.min(minIndex, maxIndex);
    const removeFromBothEnds = Math.min(minIndex, maxIndex) + 1 + n - Math.max(minIndex, maxIndex);

    return Math.min(removeFromLeft, removeFromRight, removeFromBothEnds);
}
