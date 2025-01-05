const crypto = require("crypto");

const start = Date.now();

crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512")
crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512")
crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512")

console.log("Hash: ", Date.now() - start);