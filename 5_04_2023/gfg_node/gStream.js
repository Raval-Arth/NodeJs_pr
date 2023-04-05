console.clear();

// node js stream module
const stream = require("stream");
const fs = require("fs");

fs.readFile("./5_04_2023/files/gfg.txt", (err, data) => {
  console.log(data.toString());
});

const rstream = fs.createReadStream("./5_04_2023/files/gfg.txt");

rstream.pipe(process.stdout);

// rstream.on("data", (chunk) => {
//   console.log(chunk.toString());
// });

// const writable = new stream.Writable({
//   write(chunk, encoding, callback) {
//     console.log(chunk.toString());
//     callback();
//   },
// });

writable = new stream.Writable({
  // Write function with its
  // parameters
  write: function (chunk, encoding, next) {
    // Converting the chunk of
    // data to string
    console.log(chunk.toString());
    next();
  },
});

writable.cork();
