const VALID_KEYS_PATH = __dirname + "/valid-keys.txt";
const fs = require("fs");
const readline = require("readline");
const LINE_ENDING = require("os").EOL;

module.exports = function(req, res, next) {
  const key = req.headers["x-api-key"];
  if (!key) {
    //console.log("no key sent");
    res.status(401).send("no x-api-key in request header");
  } else {
    //console.log("req.headers.x-api-key ", key);
    // validate key vs list
    const valid = validateKey(req, res, next, key);
  }
};

const validateKey = async (req, res, next, target) => {
  //console.log("validateKey target ", target);

  const keys = await getKeysFromFile();

  //console.log("validateKey keys ", keys.length);

  if (keys) {
    const validKey = keys.indexOf(target);
    if (validKey === -1) {
      //console.log("InValidKey!");
      res.status(401).send("Invalid x-api-key");
      // throw an error
      const err = new Error("Invalid x-api-key");
      next(err);
    } else {
      //console.log("Great! valid Key");
      req.requestTime = Date.now();
      next();
    }
  } else {
    //console.log("Error reading file");
    res.status(500).send("Error reading file");
    // throw an error
    //next();
    const err = new Error("Error reading file");
    next(err);
  }
};
