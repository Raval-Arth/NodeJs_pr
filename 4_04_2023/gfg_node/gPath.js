console.clear();

const path = require("path");
const process = require("process");

path1 = path.basename("/home/user/bash/index.txt");
path2 = path.basename("/home/user/bash/index.txt", ".txt");
console.log(path1);
console.log(path2);

console.log("\n" + path.delimiter);

let delimiter = path.delimiter;
console.log(process.env.PATH.split(path.delimiter));

path1 = path.dirname("/users/admin/website/index.html");
console.log("\n" + path1);
console.log(__dirname);
console.log(path.extname("index.html"));

path1 = path.format({
  root: "/ignored/root/",
  dir: "/home/user/personal",
  base: "details.txt",
});
console.log("Path 1:", path1);

path1 = path.isAbsolute("/user/bash/");
console.log(path1);
path2 = path.join("users", "..");
console.log(path2);
console.log(path.normalize("/users/admin/."));
console.log(path.parse("/users/admin/website/index.html"));

path1 = path.parse("C:\\users\\admin\\website\\index.html");
console.log(path1);
 