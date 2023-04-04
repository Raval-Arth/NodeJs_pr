console.clear(); // Clear the console
let fs = require("fs");

fs.writeFile("./4_04_2023/files/gfg.txt", "Hello World!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

fs.readFile("./4_04_2023/files/gfg.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

fs.exists("/etc/passwd", (exists) => {
  console.log(exists ? "Found" : "Not Found!");
});

// console.log("world.txt exists:", fileExists);
fs.renameSync("./4_04_2023/files/gfg.txt", "./4_04_2023/files/world.txt");

fs.stat("./4_04_2023/files/world.txt", (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});
