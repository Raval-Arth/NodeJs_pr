// Create Your Own Modules

var dt = require("./myfirstmodule");
var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world" + dt.myDateTime());
  })
  .listen(8000, console.log("SERVER START"));

// split query string into readable parts || // URL module
var url = require("url");
var adr = "http://localhost:8080/default.htm?year=2017&month=february";
var q = url.parse(adr, true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdata = q.query;
console.log(qdata.month);

console.log("\n");

//Node.js as a File Server
var fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("./view/demoFile.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8081);

// open a file
fs.open("./files/newFile2.txt", "w", (err, file) => {
  if (err) throw err;
  console.log("OPEN SAVED");
});

// create a file
fs.writeFile("./files/newFile1.txt", "new content", (err) => {
  if (err) throw err;
  console.log("WRITE SAVED");
});

// update a file
fs.appendFile("./files/newFile1.txt", "\nnew Content2", (err) => {
  if (err) throw err;
  console.log("APPEND SAVED");
});

// Delete a file
fs.unlink("./files/newFile1.txt", (err) => {
  if (err) throw err;
  console.log("FILE DELETED");
});

// Rename a file
fs.rename("./files/newFile2.txt", "./files/newFile3.txt", (err) => {
  if (err) throw err;
  console.log("FILE RENAMED");
});

// using packages upper case
var uc = require("upper-case");
console.log(
  "\nhello world--> " + uc.upperCase("hello world") + " -- uppercase"
);

// Node.js Events
rs = fs.createReadStream("./files/newFile3.txt");
rs.on("open", function () {
  console.log("-newFile3.txt FILE OPENED");
});

// events module
var events = require("events");
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
  console.log("-- EVENT FIRED");
};

eventEmitter.on("event", myEventHandler);
eventEmitter.emit("event");

//formidable module - Parse the Uploaded File -  save the file

var http = require("http");
var formidable = require("formidable");
var fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath = "./files/" + files.filetoupload.originalFilename;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write("File uploaded and moved!");
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8083);

// send email
// var nodeMailer = require("nodemailer");
// var transporter = nodeMailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "connect.arth.raval@gmail.com",
//     pass: "ArthSmitBrothers2023",
//   },
// });

// var mailOptions = {
//   from: "connect.arth.raval@gmail.com",
//   to: "xoxamo6367@marikuza.com",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!",
// };

// transporter.sendMail(mailOptions, (err, info) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });
