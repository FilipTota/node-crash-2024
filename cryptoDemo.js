// provides cryptographic functionality
// -> we can do thing like create hashes, create random hexadecimal strings, encrypt and decrypt data

import crypto from "crypto";

// createHash()
const hash = crypto.createHash("sha256"); // -> takes in the algorihm we want to use like md5, sha256
// to hash something we use update metod
hash.update("password1234");
// to get that hash
console.log('hash.digest("hex") :>> ', hash.digest("hex"));

// randomBytes
crypto.randomBytes(16, (err, buf) => {
  if (err) throw err;
  console.log("buf :>> ", buf);
  console.log('buf.toString("hex") :>> ', buf.toString("hex"));
});

// encrypting and decrypting data
// createCipheriv()
const algorihm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorihm, key, iv);
let encrypted = cipher.update("Hello this is a secret message", "utf8", "hex");
encrypted += cipher.final("hex");
console.log("encrypted :>> ", encrypted);

// createDecipheriv()
const decipher = crypto.createDecipheriv(algorihm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log("decrypted :>> ", decrypted);
