import { test, expect } from 'vitest';

test('2029. Stone Game IX', () => {
    expect(stoneGameIX([2, 1])).toBe(true);
    expect(stoneGameIX([3, 3])).toBe(false);
    expect(stoneGameIX([2])).toBe(false);
    expect(stoneGameIX([5, 1, 2, 4, 3])).toBe(false);
    expect(stoneGameIX([20, 3, 20, 17, 2, 12, 15, 17, 4])).toBe(true);
    expect(stoneGameIX([2, 3])).toBe(false);
    expect(stoneGameIX([1, 1, 7, 10, 8, 17, 10, 20, 2, 10])).toBe(true);
});

function stoneGameIX(stones: number[]): boolean {
    const count: number[] = [0, 0, 0];

    for (const stone of stones) {
        count[stone % 3]++;
    }

    console.log(`count: ${count}, %: ${stones.reduce((acc, cur) => acc + cur, 0) % 3}`);

    if (count[0] % 2 === 0) {
        return count[1] > 0 && count[2] > 0;
    }

    return Math.abs(count[1] - count[2]) > 2;
}

// function stoneGameIX(stones: number[]): boolean {
//     const n = stones.length;
//
//     let sum = 0;
//     const stoneMap = new Map<number, number>();
//
//     for (let i = 0; i < n; i++) {
//         stoneMap.set(stones[i], (stoneMap.get(stones[i]) || 0) + 1);
//     }
//
//     let k = 0;
//     for (let i = 0; i < n; i++) {
//         for (let key of stoneMap.keys()) {
//             if ((key + sum) % 3 !== 0) {
//                 k = key;
//                 break;
//             }
//             k = 0;
//         }
//
//         if (k === 0) {
//             return (i + 1) % 2 === 0; // Alice wins if the sum is divisible by 3 and it's her turn
//         }
//
//         sum += k;
//
//         if (sum % 3 === 0) {
//             return (i + 1) % 2 === 0; // Alice wins if the sum is divisible by 3 and it's her turn
//         }
//
//         if (stoneMap.get(k) === 1) {
//             stoneMap.delete(k);
//         } else {
//             stoneMap.set(k, stoneMap.get(k)! - 1);
//         }
//
//         console.log(
//             `i: ${i}, sum: ${sum}, k: ${k}, stoneMap: ${JSON.stringify(Array.from(stoneMap.entries()))}, %: ${sum % 3}`,
//         );
//     }
//
//     // console.log(
//     //     `i: ${n}, sum: ${sum}, k: ${k}, stoneMap: ${JSON.stringify(Array.from(stoneMap.entries()))}`,
//     // );
//
//     return false;
// }
