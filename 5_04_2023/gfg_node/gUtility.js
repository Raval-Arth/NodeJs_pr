console.clear();
console.clear();

// utility module in node.js

// console.clear(); // Clear the console

const util = require("util");

const path = require("path");
const net = require("net");
const { timeLog } = require("console");

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

async function async_function() {
  return "message from async function";
}

const callback_function = util.callbackify(async_function);

callback_function((err, ret) => {
  if (err) throw err;
  console.log(ret);
});

// util.callbackify
async function fn() {
  return await Promise.resolve("hello world");
}

const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});

// debuglog in node.js

const debuglog = util.debuglog("alfa-beta");

debuglog("Hii there, debuglog from alfa-beta [%d]", 2333);

const generalLog = util.debuglog("alfa-");
const timerLog = util.debuglog("alfa-romeo");
const delay = 800;

generalLog("Leaving alfa-...");
console.log("Wait for timerLog...");
setTimeout(() => {
  timerLog("timer fired after %d ", delay);
}, delay);

function fun1() {
  var val1 = util.format("%s:%s:%s", "abc");
  console.log("--->  " + util.format("%s:%s:%s", "abc", "asdasd"));
  console.log("--->  " + util.format(10, 20, 30));
  console.log("--->  " + util.format("%% : %s : %d"));
  console.log("--->  " + util.format("%% : %s", 567));
  // Returns: 'foo:%s'

  // var val2 = util.format("%s:%s", "abc", "def", "ghi", "jkl");
  // // Returns: 'foo:bar baz'

  // var val3 = util.format(10, 20, 30);
  // // Returns: '1 2 3'

  // var val4 = util.format("%% : %s : %d");
  // // Returns: '%% %s'

  // var val5 = util.format("%% : %s", 567);
  // // Returns: '% : 567'

  // console.log(val1, "\n", val2, "\n", val3, "\n", val4, "\n", val5);
}

// Function call
fun1();

console.log(
  util.formatWithOptions({ depth: 0, colors: true }, "See object %O", {
    alfa: 42,
  })
);

console.log(
  util.formatWithOptions({ colors: true, showProxy: true }, "%s:%s:%s", "abc")
);

class geeksForGeeks {}
const nestedObject = {};
nestedObject.a = [1, 2, 3];
nestedObject.b = [4, 5, 6];
nestedObject.b.inner = nestedObject.a;

const gfg = new geeksForGeeks();
console.log("1.>", util.inspect(new geeksForGeeks()));
console.log("2.>", util.inspect(nestedObject, true, 0, false));
console.log(
  "3.>",
  util.inspect(
    nestedObject,
    (showHidden = false),
    (depth = 3),
    (colorize = true)
  )
);

const fs = require("fs");
let readdir = util.promisify(fs.readdir);
let lstat = util.promisify(fs.lstat);
readdir(__dirname).then((files) => {
  console.log(files);
});

let readFiles = async (path) => {
  const files = await readdir(path);

  console.log("==>" + files);
};

readFiles(process.cwd()).catch((err) => {
  console.log(err);
});

const object1 = {
  alfa: "beta",
  romeo: [10, 20],
};

// Creating object2
const object2 = {
  alfa: "beta",
  romeo: [10, 20],
};

console.log(
  "\nobject1 == object2 : " + util.isDeepStrictEqual(object1, object2)
);
console.log("nan DEEPSTRICT : " + util.isDeepStrictEqual(NaN, NaN));
console.log("0,-0 DEEPSTRICT : " + util.isDeepStrictEqual(0, -0));
console.log(
  "object1 === object2 : " + util.isDeepStrictEqual(object1, object2)
);

console.log("\n");
