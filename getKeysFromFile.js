const VALID_KEYS_PATH = __dirname + "/valid-keys.txt";
const fs = require("fs");
const readline = require("readline");
const LINE_ENDING = require("os").EOL;

// read valid keys from file written by keyStore
// 1. send to browser
// 2. validate key for middleware
const readLinesFromFile = async path => {
  const fileStream = fs.createReadStream(path);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  let keyArray = [];
  for await (const line of rl) {
    keyArray.push(line);
  }
  return keyArray;
};

// return all lines to calling function
const getKeysFromFile = () => {
  data = readLinesFromFile(VALID_KEYS_PATH);
  return data;
};

module.exports = getKeysFromFile;
