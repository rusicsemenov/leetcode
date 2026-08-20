import { test, expect } from 'vitest';

test('3069. Distribute Elements Into Two Arrays I', () => {
    expect(resultArray([2, 1, 3])).toEqual([2, 3, 1]);
    expect(resultArray([5, 4, 3, 8])).toEqual([5, 3, 4, 8]);
    expect(resultArray([1, 2, 4])).toEqual([1, 2, 4]);
    expect(resultArray([6, 5, 14, 15])).toEqual([6, 14, 15, 5]);
});

function resultArray(nums: number[]): number[] {
    const arr1: number[] = [];
    const arr2: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (arr1.length > 0 && arr2.length > 0) {
            const putToFirst = arr1[arr1.length - 1] > arr2[arr2.length - 1];

            if (putToFirst) {
                arr1.push(nums[i]);
            } else {
                arr2.push(nums[i]);
            }
        } else {
            if (i % 2 === 0) {
                arr1.push(nums[i]);
            } else {
                arr2.push(nums[i]);
            }
        }
    }

    return arr1.concat(arr2);
}
