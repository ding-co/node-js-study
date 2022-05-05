const fs = require('fs');
const { Console } = require('console');

const output = fs.createWriteStream('./log/stdout.log');
const errorOutput = fs.createWriteStream('./log/stderr.log');

const logger = new Console({ stdout: output, stderr: errorOutput });
const count = 5;
logger.log('count: %d', count);
logger.error('count: ' + count);
