const crypto = require("crypto");

const MAX_CALLS = 3;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
    console.log(`Hash: ${i++}`, Date.now() - start);
  });
}
