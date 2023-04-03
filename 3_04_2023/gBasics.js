// http server

var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.write("hello");
    res.end();
  })
  .listen(5000);

var events = require("events");
const { log } = require("console");
var eventEmitter = new events.EventEmitter();
var myEventHandler = function () {
  console.log("I hear a node!");
};
eventEmitter.on("node", myEventHandler);
eventEmitter.emit("node");

// buffers
// var b = new Buffer(10000);
// var str = "";
// b.write("");
// console.log(str.length);
// console.log(b.length);

// Node.js REPL
// READ, EVAL, PRINT, LOOP;

function printHello() {
  console.log("Hello, World!");
}

// Now call above function after 2 seconds

var timeoutObj = setTimeout(printHello, 2000);

const encoder = new TextEncoder();
const data = encoder.encode("Hello, world");
console.log(data);
fs.writeFile("./files/hello.txt", data, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

console.log("__dirname --> " + __dirname);
console.log("__filename --> " + __filename);

var calculator = require("./calc");
console.log("\n-------");
console.log(calculator.add(1, 2));
console.log(calculator.subtract(1, 2));
console.log(calculator.multiply(1, 2));
console.log(calculator.divide(1, 2));
console.log("-------\n");

// assert
const assert = require("assert").strict;
// Function call
try {
  assert(1);
  assert.deepStrictEqual({ a: 1 }, { a: "1" });

  console.log("No Error Occurred");
} catch (error) {
  console.log("Error:", error);
}
