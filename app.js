const wordsCount = require('./lib/wordsCount');
const maxCount = require('./lib/maxCount');
const reader = require('./lib/reader');
const writer = require('./lib/writer');
const commandsHelper = require('./helper/commandsHelper');
const { availableMemory } = require('./helper/systemResources');
const readline = require('readline');
const streamer = require('./lib/streamer');

const { program } = require('commander');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

program
    .version('1.0.0')
    .description('Count the occurrences of each word in a file')
    .option('-f, --file <filename>', 'The input file')
    .option('-o, --write <output file>', 'The output file name')
    .option('-s, --stream [type]', 'read the input file as a stream')
    .on('--help', commandsHelper)
    .parse(process.argv);

const options = program.opts();

if (!options.file) {
    commandsHelper();
    console.error('Please specify input filename\n');
    process.exit(1);
}

const limit = 100;
const { file: inputFile, write: outputFile, stream } = options;

const main = async () => {
    try {
        const { fileContent, fileSizeInBytes } = await reader(inputFile);
        listOfWords = stream | (fileSizeInBytes > availableMemory / 2) ? await streamer(inputFile) : await wordsCount(fileContent);
        const { wordsWithMaxCount, highestCount } = maxCount(listOfWords);
        const finalList = { ...listOfWords, highestWords: { wordsWithMaxCount, highestCount } };

        const outputSize = Object.keys(listOfWords).length;
        if (outputSize < limit) {
            console.log(listOfWords);
        }

        rl.question(`There are more than ${limit} words. Do you want to write the output to a file instead? (Y/N)\n`, async (response) => {
            if (response.toLowerCase() === 'y') {
                await writer(finalList, outputFile);
                console.log(`The file ${outputFile}.json has been saved successfully\n`);
            } else {
                console.log(finalList);
            }

            rl.question(`Do you want to print the words with the highest count ? (Y/N)\n`, async (response) => {
                rl.close();
                if (response.toLowerCase() === 'y') {
                    console.log({ wordsWithMaxCount, highestCount });
                }
            });
        });
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};

main();

module.exports = main;
