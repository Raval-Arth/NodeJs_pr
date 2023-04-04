console.clear();

let os = require("os");
console.log("\nos.arch() -->" + os.arch());
console.log("\nos.freemem() / 1024 / 1024 -->" + os.freemem() / 1024 / 1024);
console.log("\nos.totalmem() -->" + os.totalmem());
console.log("\nos.networkInterfaces() -->" + os.networkInterfaces());
console.log("\nos.platform() -->" + os.platform());
console.log("\nos.release() -->" + os.release());
console.log("\nos.EOL -->" + JSON.stringify(os.EOL));
console.log("\nos.getPriority() -->" + os.getPriority());
