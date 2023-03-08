const fs = require('fs/promises');
const { join } = require('path');
const { inputDir } = require('../config');
module.exports = async (file, encoding = 'utf8') => {
    try {
        const inputFilePath = join(__dirname, `../${inputDir}`, file);
        const fileSizeInBytes = (await fs.stat(inputFilePath)).size;
        const fileContent = await fs.readFile(inputFilePath, encoding);
        return { fileContent, fileSizeInBytes };
    } catch (error) {
        console.error(`Error reading file: ${error}`);
        process.exit(1);
    }
};
