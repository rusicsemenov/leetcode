import { expect, test } from 'vitest';
import { createViteLogger } from 'vitest/node';

test('1406 Stone Game III', () => {
    // expect(stoneGameIII([1,2,3,7])).toBe('Bob');
    // expect(stoneGameIII([1,2,3,-9])).toBe('Alice');
    // expect(stoneGameIII([1,2,3,6])).toBe('Tie');
    // expect(stoneGameIII([-1,-2,-3])).toBe('Tie');
    // expect(stoneGameIII([6,-9,11,6,9,-3,-17,-10,15,-14,-10,9,3,4,-4,17,2,3,-9,-16,17,2,5])).toBe('Alice');
    expect(stoneGameIII([1, -2, 3, -4, 5, -6, 7])).toBe('Alice');

    // expect(bestCount([-9,-16,17,2,5])).toBe(1);
});

function sum(stones: number[]): number {
    return stones.reduce((acc, curr) => acc + curr, 0);
}

function bestCount(stones: number[]): number {
    const n0 = stones[0] || 0;
    const n1 = stones[1] || 0;
    const n2 = stones[2] || 0;
    // const n3 = stones[3] || 0;
    const n4 = stones[4] || 0;

    const sum1 = n0;
    const sum2 = sum1 + n1;
    const sum3 = sum2 + n2;
    const sum0and4 = n0 + n4;
    // const sum1to4 = n1 + n2 + n3;

    // console.log({
    //     sum1,
    //     sum2,
    //     sum3,
    //     sum0and4,
    //     sum1to4
    // })

    if (sum3 >= sum1 && sum3 >= sum2 && sum0and4 < sum3) {
        return 3;
    }
    // if (sum0and4 > sum1to4) {
    //     return 1;
    // }
    if (sum2 >= sum1 || sum2 === stones[2]) {
        return 2;
    }
    return 1;
}

// function stoneGameIII(stoneValue: number[]): 'Tie' | 'Alice' | 'Bob' {
//     const stones = stoneValue.slice();
//     let aliceCount = 0;
//     let bobCount = 0;
//     let index = 0;
//
//     while (stones.length > 0) {
//         const best = bestCount(stones);
//
//         if (index % 2 === 0) {
//             console.log(`Alice turn: best: ${best}, stones: ${stones}`);
//             aliceCount += sum(stones.slice(0, best));
//         } else {
//             console.log(`Bob turn: best: ${best}, stones: ${stones}`);
//             bobCount += sum(stones.slice(0, best));
//         }
//         console.log(`aliceCount: ${aliceCount}, bobCount: ${bobCount}`);
//
//         stones.splice(0, best);
//         index++;
//     }
//
//     if (aliceCount === bobCount) {
//         return 'Tie';
//     } else if (aliceCount > bobCount) {
//         return 'Alice';
//     } else {
//         return 'Bob';
//     }
//
// }

const stoneGameIII = function (stoneValue: number[]): 'Alice' | 'Bob' | 'Tie' {
    const n = stoneValue.length;

    const dp = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        dp[i] = -Infinity;
        let sum = 0;

        for (let j = i; j < Math.min(n, i + 3); j++) {
            sum += stoneValue[j];

            dp[i] = Math.max(dp[i], sum - dp[j + 1]);
        }
    }

    if (dp[0] > 0) return 'Alice';
    if (dp[0] < 0) return 'Bob';
    return 'Tie';
};
