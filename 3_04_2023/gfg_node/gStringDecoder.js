const { StringDecoder } = require("string_decoder");

const decoder = new StringDecoder("utf-8");

// Using the end() method
const text_one = Buffer.from("GeeksforGeeks", "utf-8");
let decode_text = decoder.end(text_one);
console.log("Decoded Text:", decode_text);

let cent_symbol = Buffer.from([0xc2, 0xa2]);
let cent_symbol_out = decoder.end(cent_symbol);
console.log("Complete Cent Symbol:", cent_symbol_out);

let decoded_text = decoder.write(text_one);
console.log("Decoded Text:", decoded_text);
