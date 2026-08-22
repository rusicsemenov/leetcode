import { test, expect } from 'vitest';

test('3622. Check Divisibility by Digit Sum and Product', () => {
    expect(checkDivisibility(99)).toBe(true);
    expect(checkDivisibility(23)).toBe(false);
    expect(checkDivisibility(8)).toBe(false);
    expect(checkDivisibility(17190)).toBe(true);
});

function checkDivisibility(n: Readonly<number>): boolean {
    let digitSum: number = 0;
    let digitProduct: number = 1;
    let original: number = n;

    while (n > 0) {
        let digit: number = n % 10;
        n = Math.floor(n / 10);

        digitSum += digit;
        digitProduct *= digit;
    }

    return original % (digitSum + digitProduct) === 0;
}
