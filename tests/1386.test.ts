import { test, expect } from 'vitest';
import { createViteLogger } from 'vitest/node';

test('1386. Cinema Seat Allocation', () => {
    expect(
        maxNumberOfFamilies(3, [
            [1, 2],
            [1, 3],
            [1, 8],
            [2, 6],
            [3, 1],
            [3, 10],
        ]),
    ).toBe(4);
    expect(
        maxNumberOfFamilies(2, [
            [2, 1],
            [1, 8],
            [2, 6],
        ]),
    ).toBe(2);
    expect(
        maxNumberOfFamilies(4, [
            [4, 3],
            [1, 4],
            [4, 6],
            [1, 7],
        ]),
    ).toBe(4);
});

// function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
//     let res = 0;
//     const map = new Map<number, Set<number>>();
//
//     for (let r = 1; r <= n; r++) {
//         map.set(r, new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//     }
//
//     for (const [row, seat] of reservedSeats) {
//         map.get(row)?.delete(seat);
//     }
//
//     for (const seats of map.values()) {
//         if (seats.delete(2) && seats.delete(3) && seats.delete(4) && seats.delete(5)) {
//             res += 1;
//         }
//         if (seats.delete(4) && seats.delete(5) && seats.delete(6) && seats.delete(7)) {
//             res += 1;
//         }
//         if (seats.delete(6) && seats.delete(7) && seats.delete(8) && seats.delete(9)) {
//             res += 1;
//         }
//     }
//
//     return res;
// }

// function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
//     let res = 0;
//     const map = new Map<number, Set<number>>();
//
//     for (const [row, seat] of reservedSeats) {
//         map.set(row, (map.get(row) || new Set()).add(seat));
//     }
//
//     for (let row = 0; row < n; row++) {
//         const reserved = map.get(row + 1) || new Set();
//         const left = !reserved.has(2) && !reserved.has(3) && !reserved.has(4) && !reserved.has(5);
//         const middle = !reserved.has(4) && !reserved.has(5) && !reserved.has(6) && !reserved.has(7);
//         const right = !reserved.has(6) && !reserved.has(7) && !reserved.has(8) && !reserved.has(9);
//
//         if (left && right) {
//             res += 2;
//         } else if (left || right) {
//             res += 1;
//         } else if (middle) {
//             res += 1;
//         }
//     }
//
//     return res;
// }

function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
    const rows: Map<number, number> = new Map();

    for (const [row, seat] of reservedSeats) {
        if (seat === 1 || seat === 10) {
            continue;
        }

        const mask = rows.get(row) ?? 0;
        rows.set(row, mask | (1 << seat));
    }

    let total: number = (n - rows.size) * 2;

    let leftMask = 0;
    let middleMask = 0;
    let rightMask = 0;

    // console.group('Seat Masks');
    // console.log('Left Mask:', leftMask, 'Middle Mask:', middleMask, 'Right Mask:', rightMask);

    for (let seat = 2; seat <= 5; seat++) {
        // console.log(leftMask, '<<', seat, '=', 1 << seat);
        leftMask |= 1 << seat;
        // console.log(leftMask);
    }

    for (let seat = 4; seat <= 7; seat++) {
        middleMask |= 1 << seat;
    }

    for (let seat = 6; seat <= 9; seat++) {
        rightMask |= 1 << seat;
    }
    // console.log('Left Mask:', leftMask, 'Middle Mask:', middleMask, 'Right Mask:', rightMask);
    // console.groupEnd();

    // console.log('Rows:', rows);

    for (const mask of rows.values()) {
        const leftFree = (mask & leftMask) === 0;
        const middleFree = (mask & middleMask) === 0;
        const rightFree = (mask & rightMask) === 0;
        console.log({
            mask,
            leftMask,
            leftFree: mask & leftMask,
            middleMask,
            middleFree: mask & middleMask,
            rightMask,
            rightFree: mask & rightMask,
        });

        if (leftFree && rightFree) {
            total += 2;
        } else if (leftFree || middleFree || rightFree) {
            total += 1;
        }
    }

    return total;
}
