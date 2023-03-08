const wordsCount = require('../wordsCount');
describe('wordsCount', () => {
    test('Should return an empty object when input is null', async () => {
        return wordsCount(null)
            .then(() => {
                throw new Error('Promise resolved successfully but should have been rejected');
            })
            .catch((error) => {
                expect(error.message).toBe('Must be string data and not empty');
            });
    });

    // I just used this for invalid input when data type not a string object
    test('Should throw an error when input is not a string object', async () => {
        return wordsCount(123)
            .then(() => {
                throw new Error('Promise resolved successfully but should have been rejected');
            })
            .catch((error) => {
                expect(error.message).toBe('Must be string data and not empty');
            });
    });

    it('Should return a dictionary keys being words count being a value', async () => {
        const text = `Quod equidem non non reprehendo ?"" %$# consectetur adipiscing reprehendo.`;
        const result = await wordsCount(text);
        expect(result).toEqual({
            quod: 1,
            equidem: 1,
            non: 2,
            reprehendo: 2,
            consectetur: 1,
            adipiscing: 1,
        });
    });
});
