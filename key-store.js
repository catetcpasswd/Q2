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
  console.log("generated key ", key);

  if (key.length > 4) {
    const obj = { apiKey: key };
    console.log("obj ", key);
    res.status(201);
    res.setHeader("x-api-key", key);
    res.json(obj);
  } else {
    res.status(500).send("Error reading file");
    const err = new Error("Error reading file");
  }
};
