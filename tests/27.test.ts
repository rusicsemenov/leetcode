import { expect, test } from 'vitest';

test('27. Remove Element', () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
});

function removeElement(nums: number[], val: number): number {
    const filtered = nums.filter((num) => num !== val);

    for (let i = 0; i < filtered.length; i++) {
        nums[i] = filtered[i];
    }
    return filtered.length;
}
