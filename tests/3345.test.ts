import { test, expect } from 'vitest';

test('3345. Smallest Divisible Digit Product I', () => {
    expect(smallestNumber(10, 2)).toBe(10);
    expect(smallestNumber(15, 3)).toBe(16);
    expect(smallestNumber(7, 6)).toBe(10);
});

function smallestNumber(n: number, t: number): number {
    const nArray = n.toString().split('').map(Number);
    const multiplier = nArray.slice(0, -1).reduce((a, b) => a * b, 1);
    const lastN = nArray[nArray.length - 1];
    let iteration = 0;

    while ((multiplier * (lastN + iteration)) % t !== 0) {
        if (lastN + iteration === 10) {
            break;
        }
        iteration++;
    }

    return n + iteration;
}
