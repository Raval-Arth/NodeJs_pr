const process = require("process");

console.log("\narch --> " + process.arch);
console.log("argv --> " + process.argv);
console.log("argv0 --> " + process.argv0);
console.log("config --> " + process.config);

var no_conf = 0;
var conf = process.config;

for (var key in conf) {
  console.log(key);
  var sub_conf = conf[key];

  for (var attr in sub_conf) {
    console.log("\t" + attr + "=>" + sub_conf[attr]);
    no_conf++;
  }
}

console.log("total no of configuration available is " + no_conf);

const usage = process.cpuUsage();
console.log("\ncpuUsage --> " + JSON.stringify(usage));
console.log("Current working directory: ", process.cwd());
console.log("debug port is " + process.debugPort);
console.log(process.env);

console.log("\n");
