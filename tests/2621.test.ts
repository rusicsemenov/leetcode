import { describe, it } from 'vitest';

async function sleep(millis: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, millis);
    });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

describe('2621', function () {
    it('2621', { retry: 3 }, async () => {
        const t = Date.now();
        await sleep(100).then(() => console.log(Date.now() - t)); // 100;
    });
});
