const fs = require('fs');
const { join } = require('path');
const wordsCount = require('./wordsCount');
const { inputDir } = require('../config');

module.exports = (file, encoding = 'utf8') => {
    const inputFilePath = join(__dirname, `../${inputDir}`, file);
    const readStream = fs.createReadStream(inputFilePath, { encoding });
    let listOfWords;
    readStream.on('data', async (chunk) => {
        listOfWords = await wordsCount(chunk);
    });

    return new Promise((resolve, reject) => {
        readStream.on('end', () => {
            resolve(listOfWords);
        });

        readStream.on('error', (error) => {
            reject(error);
        });
    });
};
