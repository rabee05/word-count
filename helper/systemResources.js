const os = require('os');

module.exports = {
    // Get the total memory in bytes
    totalMemory: os.totalmem(),
    // Get the free memory in bytes
    availableMemory: os.freemem(),
};
