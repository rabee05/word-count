module.exports = (wordCounts) => {
    let highestCount = 0;
    let wordsWithMaxCount = [];
    try {
        highestCount = Object.values(wordCounts).reduce((accumulator, current) => {
            return current > accumulator ? current : accumulator;
        }, 0);
        wordsWithMaxCount = Object.keys(wordCounts).filter((word) => {
            return wordCounts[word] === highestCount;
        });

        return { wordsWithMaxCount, highestCount };
    } catch (error) {
        console.log(error);
    }
};
