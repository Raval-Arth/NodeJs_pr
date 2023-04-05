console.clear();

const crypto = require("crypto");

// Creating and initializing algorithm and password
const algorithm = "aes-192-cbc";
const password = "Password used to generate key";

// Getting key for the cipher object
const key = crypto.scryptSync(password, "salt", 24);

// Creating and initializing the static iv
const iv = Buffer.alloc(16, 0);

// Creating and initializing the cipher object
const cipher = crypto.createCipheriv(algorithm, key, iv);

// Updating the cipher with the data
// by using update() method
// let encrypted = cipher.update("some clear text data", "utf8", "hex");
let encrypted = "";

// Getting the buffer data of cipher
encrypted += cipher.final("hex");

// Display the result
console.log(encrypted + "\n");
console.log(crypto.getCiphers());

const diffiehellmangrp = crypto.getDiffieHellman("modp14");
console.log("Key exchange object : ", JSON.stringify(diffiehellmangrp));

const diffiehellmangrp1 = crypto.getDiffieHellman("modp14");
const diffiehellmangrp2 = crypto.getDiffieHellman("modp14");

// Generating keys
diffiehellmangrp1.generateKeys();
diffiehellmangrp2.generateKeys();

// Computing secret
const diffiehellmangrp1sc = diffiehellmangrp1.computeSecret(
  diffiehellmangrp2.getPublicKey(),
  null,
  "hex"
);

const diffiehellmangrp2sc = diffiehellmangrp2.computeSecret(
  diffiehellmangrp1.getPublicKey(),
  null,
  "hex"
);

console.log(diffiehellmangrp1sc === diffiehellmangrp2sc);

crypto.pbkdf2("password", "salt", 100000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString("hex"));
});

console.log(
  crypto
    .createHash("sha256", "password")
    .update("some data to hash")
    .digest("hex")
);

console.log(
  (hash = crypto
    .createHmac("sha256", "secret")
    .update("GeeksforGeeks")
    .digest("hex"))
);


