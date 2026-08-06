import { test, expect } from 'vitest';

test('13 Roman to Integer', () => {
    expect(romanToInt('III')).toBe(3);
    expect(romanToInt('LVIII')).toBe(58);
    expect(romanToInt('MCMXCIV')).toBe(1994);
});

const ROMAN_SYMBOLS = new Map<string, number>([
    ['I', 1],
    ['IV', 4],
    ['V', 5],
    ['IX', 9],
    ['X', 10],
    ['XL', 40],
    ['L', 50],
    ['XC', 90],
    ['C', 100],
    ['CD', 400],
    ['D', 500],
    ['CM', 900],
    ['M', 1000],
]);

function romanToInt(s: string): number {
    let res = 0;
    let prevSimbol = '';

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (ROMAN_SYMBOLS.has(`${prevSimbol}${c}`)) {
            res += ROMAN_SYMBOLS.get(`${prevSimbol}${c}`)! - (ROMAN_SYMBOLS.get(prevSimbol) || 0);
        } else {
            res += ROMAN_SYMBOLS.get(c)!;
        }

        prevSimbol = c;
    }

    return res;
}

// function romanToInt(s: string): number {
//     const newMap = new Map<string, number>([
//         ['I', 1],
//         ['V', 5],
//         ['X', 10],
//         ['L', 50],
//         ['C', 100],
//         ['D', 500],
//         ['M', 1000],
//     ]);
//     let total = 0;
//
//     for (let i = 0; i < s.length; i++) {
//         const current: string = s[i];
//         const currentValue: number = newMap.get(current)!;
//         const next: string = s[i + 1];
//
//         const rule1 = (next === 'V' || next === 'X') && current === 'I';
//         const rule2 = (next === 'L' || next === 'C') && current === 'X';
//         const rule3 = (next === 'D' || next === 'M') && current === 'C';
//         const isSubtractive = rule1 || rule2 || rule3;
//
//         if (isSubtractive) {
//             total -= currentValue;
//         } else {
//             total += currentValue;
//         }
//     }
//     return total;
// }
