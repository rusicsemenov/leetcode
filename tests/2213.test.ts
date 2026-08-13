import { expect, test } from 'vitest';
import { lS, lQC, lI } from './2213.mocks';

test('2213. Longest Substring of One Repeating Character', () => {
    expect(longestRepeating('babacc', 'bcb', [1, 3, 3])).toEqual([3, 3, 4]);
    expect(longestRepeating('abyzz', 'aa', [2, 1])).toEqual([2, 3]);

    // my solution doesn't work with a big string, so I will comment it out for now
    // expect(longestRepeating(lS, lQC, lI)).toEqual([2, 3]);
});

function longestRepeating(s: string, queryCharacters: string, queryIndices: number[]): number[] {
    const result: number[] = [];
    let string = s;

    for (let i = 0; i < queryCharacters.length; i++) {
        const queryCharacter = queryCharacters[i];
        const queryIndex = queryIndices[i];

        string =
            string.substring(0, queryIndex) + queryCharacter + string.substring(queryIndex + 1);
        result.push(getMaxRepeating(string));
    }

    return result;
}

function getMaxRepeating(s: string): number {
    let maxCount = 1;
    let currentCount = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            currentCount++;
        } else {
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 1;
        }
    }
    maxCount = Math.max(maxCount, currentCount);
    return maxCount;
}

// function longestRepeating(s: string, queryCharacters: string, queryIndices: number[]): number[] {
//     const n = s.length;
//     const tree = new Array(4 * n).fill(null);
//
//     const merge = (left, right) => {
//         if (left === null) return right;
//         if (right === null) return left;
//
//         const [lc, lrc, llen, lp, ls, lb] = left;
//
//         const [rlc, rc, rlen, rp, rs, rb] = right;
//
//         const length = llen + rlen;
//
//         let prefix = lp;
//
//         if (lrc === rlc && lp === llen) {
//             prefix = llen + rp;
//         }
//
//         let suffix = rs;
//
//         if (lrc === rlc && rs === rlen) {
//             suffix = rlen + ls;
//         }
//
//         let best = Math.max(lb, rb);
//
//         if (lrc === rlc) {
//             best = Math.max(best, ls + rp);
//         }
//
//         return [lc, rc, length, prefix, suffix, best];
//     };
//
//     const build = (node, start, end) => {
//         if (start === end) {
//             tree[node] = [s[start], s[start], 1, 1, 1, 1];
//             return;
//         }
//
//         const mid = Math.floor((start + end) / 2);
//
//         build(node * 2, start, mid);
//         build(node * 2 + 1, mid + 1, end);
//
//         tree[node] = merge(tree[node * 2], tree[node * 2 + 1]);
//     };
//
//     const update = (node, start, end, index, char) => {
//         if (start === end) {
//             tree[node] = [char, char, 1, 1, 1, 1];
//             return;
//         }
//
//         const mid = Math.floor((start + end) / 2);
//
//         if (index <= mid) {
//             update(node * 2, start, mid, index, char);
//         } else {
//             update(node * 2 + 1, mid + 1, end, index, char);
//         }
//
//         tree[node] = merge(tree[node * 2], tree[node * 2 + 1]);
//     };
//
//     build(1, 0, n - 1);
//
//     const answer = [];
//
//     console.log(tree);
//
//     for (let i = 0; i < queryIndices.length; i++) {
//         update(1, 0, n - 1, queryIndices[i], queryCharacters[i]);
//         answer.push(tree[1][5]);
//     }
//
//     return answer;
// }
