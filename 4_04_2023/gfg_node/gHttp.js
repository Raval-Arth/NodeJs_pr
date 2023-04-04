const http = require("http");

var aliveAgent = new http.Agent({
  keepAlive: true,
  maxSockets: 0,
  maxSockets: 5,
});

var agent = new http.Agent({});

var createConnection = aliveAgent.createConnection;
var createConnection = agent.createConnection;

console.log("SUCCESS: createConnection is a function");

console.log(createConnection);

agent = require("agentkeepalive");
keepAlive = new agent({});
option = {
  host: "www.google.com",
  port: 80,
  path: "/",
  method: "GET",
};

req = http.request(option, function (res) {
  console.log("STATUS: " + res.statusCode);
});

console.error(new Error("New Error has happened"));
const obj = "third object";

// It will display 'This is the third object example' to stderr
console.warn(`This is the ${obj} example`);

console.assert(true, "error message 1");
console.assert(false, "error message 2");
console.clear();

let test = require("console");
test.count("s");
test.count("a");
console.countReset("a");
test.count("a");

console.debug("This is a sample debug message!");
let geek = {
  course: "DSA",
  price: "5000",
};

console.dir(geek);
console.info("sdsadad");
