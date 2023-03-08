const maxCount = require('../maxCount');

describe('maxCount', () => {
    it('should return array of words with the highest occurrencet for valid input', async () => {
        const text = {
            quod: 1,
            equidem: 1,
            non: 2,
            reprehendo: 2,
            consectetur: 1,
            adipiscing: 1,
        };
        const result = maxCount(text);
        expect(result).toEqual({ wordsWithMaxCount: ['non', 'reprehendo'], highestCount: 2 });
    });
});
