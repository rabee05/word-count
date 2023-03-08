const maxCount = require('./maxCount');

const wordsCount = (text) => {
    return new Promise((resolve, reject) => {
        if (Object.prototype.toString.call(text) !== '[object String]' || !text) {
            reject(new Error('Must be string data and not empty'));
            return;
        }

        //used regEx to clean up the punctuation
        const words = text
            .trim()
            .replace(/[^\w\s]|_/g, '')
            .toLowerCase()
            .split(/\s+/);

        const wordCounts = {};

        for (const word of words) {
            if (wordCounts[word]) {
                wordCounts[word]++;
            } else {
                wordCounts[word] = 1;
            }
        }

        resolve(wordCounts);
    });
};

module.exports = wordsCount;
