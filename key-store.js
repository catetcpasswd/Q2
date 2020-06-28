const VALID_KEYS_PATH = __dirname + "/valid-keys.txt";
const fs = require("fs");
const shortid = require("shortid");
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require("os").EOL;

module.exports = function(req, res) {
  console.log("keystore");
  const key = shortid.generate();
  const str = key.concat(LINE_ENDING);

  fs.appendFile(VALID_KEYS_PATH, str, err => {
    if (err) {
      return console.log(err);
    }
  });
  console.log("generated key", key);
  req.apiKey = key;
  //next();
  return;
};
