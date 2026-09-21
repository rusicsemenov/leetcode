import { test, expect } from 'vitest';

test('3498. Reverse Degree of a String', () => {
    expect(reverseDegree('abc')).toEqual(148);
    expect(reverseDegree('zaza')).toEqual(160);
});

function reverseDegree(s: string): number {
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        res += (26 - (s.charCodeAt(i) - 97)) * (i + 1);
    }

    return res;
}
