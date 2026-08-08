import { expect, test } from 'vitest';

test('14. Longest Common Prefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
    expect(longestCommonPrefix(['ab', 'a'])).toBe('a');
});

function longestCommonPrefix(strs: string[]): string {
    let prefLength = 0;
    const map = new Map<number, string>();

    for (let i = 0; i < strs[0].length; i++) {
        map.set(i, strs[0][i]);
        prefLength++;
    }

    for (let i = 1; i < strs.length; i++) {
        const str = strs[i];
        prefLength = Math.min(prefLength, str.length);

        for (let j = 0; j < Math.min(str.length, prefLength); j++) {
            if (str[j] !== map.get(j)) {
                prefLength = j;
                break;
            }
        }
    }

    return strs[0].slice(0, prefLength);
}
