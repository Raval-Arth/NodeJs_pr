console.clear();
console.clear();

// utility module in node.js

// console.clear(); // Clear the console

const util = require("util");

const path = require("path");
const net = require("net");

// console.log(util);
// console.log("resolve", path.resolve("gfg.txt"));

let server = net.createServer(function (connection) {
  console.log("client connected");
  connection.on("end", function () {
    console.log("client disconnected");
  });
  connection.write("Hello World!\r\n");
  connection.pipe(connection);
});

server.listen(8080, function () {
  console.log("server listening");
});

let client = net.connect({ port: 8080 }, function () {
  console.log("connected to server!");
  client.write("world!\r\n");
});

client.on("data", function (data) {
  console.log(data.toString());
  client.end();
});

client.on("end", function () {
  console.log("disconnected from server");
});

// ------------------------------

async function f() {
  return "async function";
}


