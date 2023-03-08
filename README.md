# Word Count CLI
This is a command-line interface (CLI) tool that counts the occurrences of each word in a file. It takes an input file as an argument, processes it, and produces an output with the frequency count of each word in the file.

# Features
* Count the number of occurrences of each word in a file.
* Show a list of words with the highest count.
* Option to write the output to a file.
* Option to read files as a stream to optimize memory usage.
 
# Installation
* Clone the repository.
* Install the dependencies using npm install.

# Usage

```
    $ node app -f <filename> [-o <output file>] [-s]
```

# Options
```
-f, --file <filename>: The input file to count the words.
-o, --write <output file>: (Optional) Default output.json
-s, --stream [type]: (Optional) Read the input file as a stream. 
-h, --help: Display help for command
```

# Examples
Count the words in a file and show the list of words with the highest count:
```
node app.js -f input.txt
```

Count the words in a file and write the output to a file:
```
node index.js -f input.txt -o somename
```
Count the words in a large file using a stream:
```
node index.js -f input.txt -o somename -s
```

# Configuration Options
The following configuration options can be set in config.js:
```
module.exports = {
    inputDir: 'data/input',
    outputDir: 'data/output',
};

```
* inputDir: The directory to read input files from
* outputDir: The directory to write output files to

# Running Unit Tests
This project includes unit tests for the wordsCount and maxCount functions. To run the tests, first make sure you have Jest installed:
```
npm install --save-dev jest

```
Then, run the tests using the following command:
```
npm test
```

