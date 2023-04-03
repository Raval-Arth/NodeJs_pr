var ubuf = Buffer.alloc(5);
console.log(ubuf); //<Buffer 00 00 00 00 00>

var abuf = new Buffer([16, 32, 48, 64]);
console.log(abuf); //<Buffer 10 20 30 40>

var sbuf = new Buffer("GeeksforGeeks", "ascii");
console.log(sbuf); //<Buffer 47 65 65 6b 73 66 6f 72 47 65 65 6b 73>

cbuf = new Buffer(256);
bufferlen = cbuf.write("Learn Programming with GeeksforGeeks!!!");
console.log("No. of Octets in which string is written : " + bufferlen);

rbuf = new Buffer(26);
var j;
for (var i = 65, j = 0; i < 90, j < 26; i++, j++) {
  rbuf[j] = i;
}
console.log("rbuf --> " + rbuf.toString("ascii"));

// Buffer.copy() Method
var buf1 = new Buffer("GeeksforGeeks");
var buf2 = new Buffer(20);
buf1.copy(buf2);
console.log("\nbuf2 content: " + buf2.toString());

// BUFFER includes() METHOD
const buffer = new Buffer("Geek One");
console.log("\nincludes() --> " + buffer.includes("Geek"));

// comapre() method
var buffer1 = Buffer.from("2");
var buffer2 = Buffer.from("1");
var buffer3 = Buffer.from("3");
var array = [buffer1, buffer2, buffer3];

// Before sorting
console.log(array);

// After sorting array
console.log("\nBuffer.compare --> " + array.sort(Buffer.compare));

// using buffer.alloc() method
var buf = Buffer.alloc(6);

// Prints: <Buffer 00 00 00 00 00 00>
console.log(buf);

var buf1 = Buffer.from("Hi");
var buf2 = Buffer.from("Hi");

// Prints true(boolean value)
console.log("\nequals --> " + buf1.equals(buf2));

buf = Buffer.from("GeeksforGeeks", "ascii");

// Printing original buffer
console.log("\nOriginal buffer is: " + buf);

// Cropping buffer, here starting index
// is 5 and ending index is 10
cropped_buf = buf.subarray(5, 10);

// Printing cropped buffer
console.log("Cropped buffer is: " + cropped_buf);

// Modifying cropped buffer
cropped_buf[0] = 70; // F
cropped_buf[1] = 79; // O
cropped_buf[2] = 82; // R

// Printing cropped buffer
console.log("Cropped buffer after modification is: " + cropped_buf);

// Printing original buffer
console.log("Original buffer after modification is: " + buf);

// readIntBE() method
const buff = Buffer.from([0x11, 0x12, 0x34, 0x56, 0x89, 0xcd]);

console.log(buff.readIntBE(0, 5).toString(16));

console.log(buff.readIntBE(0, 4).toString(16));

// Buffer.write
buf = Buffer.from("GeeksforGeeks");
buf.write("EE", 1);
console.log(buf.toString());

