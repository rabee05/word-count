const fs = require('fs/promises');
const { existsSync, mkdirSync } = require('fs');
const { join, dirname } = require('path');
const { outputDir } = require('../config');
module.exports = async (data, fileName = 'output', type = 'json', encoding = 'utf8') => {
    try {
        const outputFilePath = join(__dirname, `../${outputDir}`, `${fileName}.${type}`);

        // Create the output directory if it does not exist
        const outputDirPath = dirname(outputFilePath);
        if (!existsSync(outputDirPath)) {
            mkdirSync(outputDirPath, { recursive: true });
        }

        const fileContent = type == 'json' ? JSON.stringify(data, null, 2) : data;
        await fs.writeFile(outputFilePath, fileContent, encoding);
    } catch (error) {
        console.error(`Error write to a file: ${error}`);
        process.exit(1);
    }
};
