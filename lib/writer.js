const fs = require('fs/promises');
const { join } = require('path');
const { outputDir } = require('../config');
module.exports = async (data, fileName = 'output', type = 'json', encoding = 'utf8') => {
    try {
        const outputFilePath = join(__dirname, `../${outputDir}`, `${fileName}.${type}`);
        const fileContent = type == 'json' ? JSON.stringify(data, null, 2) : data;
        await fs.writeFile(outputFilePath, fileContent, encoding);
    } catch (error) {
        console.error(`Error write to a file: ${error}`);
        process.exit(1);
    }
};
