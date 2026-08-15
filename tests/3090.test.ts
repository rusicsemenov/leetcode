import { expect, test } from 'vitest';
test('3090. Maximum Length Substring With Two Occurrences', () => {
    expect(maximumLengthSubstring('bcbbbcba')).toEqual(4);
    expect(maximumLengthSubstring('aaaa')).toEqual(2);
});

function maximumLengthSubstring(s: string): number {
    let left = 0;
    let right = 0;
    const charCount: Record<string, number> = {};
    let maxLength = 0;

    while (right < s.length) {
        const char = s[right];
        charCount[char] = (charCount[char] || 0) + 1;

        while (charCount[char] > 2) {
            const leftChar = s[left];
            charCount[leftChar]--;
            if (charCount[leftChar] === 0) {
                delete charCount[leftChar];
            }
            left++;
        }

        if (Object.values(charCount).every((count) => count <= 2)) {
            maxLength = Math.max(maxLength, right - left + 1);
        }

        right++;
    }

    return maxLength;
}
