import { expect, test } from 'vitest';

test('20. Valid Parentheses', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('(]')).toBe(false);
    expect(isValid('([)]')).toBe(false);
    expect(isValid(']')).toBe(false);
    expect(isValid('{[]}')).toBe(true);
    expect(isValid('([])')).toBe(true);
    expect(isValid('([}}])')).toBe(false);
});

const PAIRS: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
};

function isValid(s: string): boolean {
    let res = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const pair = PAIRS[char];

        if (pair && pair === res.slice(-1)) {
            res = res.slice(0, -1);
        } else {
            res += char;
        }
    }

    return res.length === 0;
}
