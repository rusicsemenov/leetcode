import { expect, test } from 'vitest';

test('1807. Evaluate the Bracket Pairs of a String', () => {
    expect(
        evaluate('(name)is(age)yearsold', [
            ['name', 'bob'],
            ['age', 'two'],
        ]),
    ).toBe('bobistwoyearsold');

    expect(evaluate('hi(name)', [['a', 'b']])).toBe('hi?');

    expect(evaluate('(a)(a)(a)aaa', [['a', 'yes']])).toBe('yesyesyesaaa');

    expect(evaluate('(a)(a)(a)aaa', [['a', 'yes']])).toBe('yesyesyesaaa');

    expect(
        evaluate('(fy)(kj)(ege)r', [
            ['uxhhkpvp', 'h'],
            ['nriroroa', 'm'],
            ['wvhiycvo', 'z'],
            ['qsmfeing', 's'],
            ['hbcyqulf', 'q'],
            ['xwgfjnrf', 'b'],
            ['kfipazun', 's'],
            ['wnkrtxui', 'u'],
            ['abwlsese', 'e'],
            ['iimsmftc', 'h'],
            ['pafqkquo', 'v'],
            ['kj', 'tzv'],
            ['fwwxotcd', 't'],
            ['yzgjjwjr', 'l'],
        ]),
    ).toBe('?tzv?r');
});

function evaluate(s: string, knowledge: string[][]): string {
    let res = s;

    for (const [key, value] of knowledge) {
        const reg = new RegExp(`\\(${key}\\)`, 'g');
        res = res.replaceAll(reg, value);
    }

    res = res.replaceAll(/\(\w+\)/gi, '?');

    return res;
}
