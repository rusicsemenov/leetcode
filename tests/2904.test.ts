import { test, expect } from 'vitest';

test('2904. Shortest and Lexicographically Smallest Beautiful String', () => {
    expect(shortestBeautifulSubstring('100011001', 3)).toEqual('11001');
    expect(shortestBeautifulSubstring('1011', 2)).toEqual('11');
    expect(shortestBeautifulSubstring('000', 1)).toEqual('');
});

function shortestBeautifulSubstring(s: string, k: number): string {
    let res = '';
    let count = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[right] === '1') {
            count++;
        }

        while (count >= k) {
            const currentSubstring = s.slice(left, right + 1);
            if (
                res === '' ||
                currentSubstring.length < res.length ||
                (currentSubstring.length === res.length && currentSubstring < res)
            ) {
                res = currentSubstring;
            }
            if (s[left] === '1') {
                count--;
            }
            left++;
        }
    }

    return res;
}
