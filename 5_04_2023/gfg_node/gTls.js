console.clear();

let tls = require("tls");
let fs = require("fs");

PORT = 8000;
HOST = "127.0.0.1";
value = null;

let options = {
  key: fs.readFileSync("./private-key.pem"),
  cert: fs.readFileSync("./public-cert.pem"),
  rejectUnauthorized: false,
};

let server = tls.createServer(options, (socket) => {
  socket.write("authorizationError : " + socket.authorizationError);
  socket.on("data", (data) => {
    console.log(data.toString());
    value = data.toString();
  });

  socket.on("end", () => {
    console.log("client disconnected");
  });
});

server.listen(PORT, HOST, function () {
  console.log("SERVER AT %s, ON PORT %s", HOST, PORT);
});

let client = tls.connect(PORT, HOST, options, function () {
  //   value = client.setMaxSendFragment(16384);
  //   value = tls.rootCertificates;
  //   value = tls.getCiphers();
  value = client.address();

  if (value) {
    // console.log("Max send fragment set to 16384");
    // console.log("rootCertificates: ", value[0]);
    // client.write(" Cipher : " + value[12]);
    client.write("Bound address : " + value.family);
  } else {
    console.log("Max send fragment not set");
  }

  console.log("connected to server!");
  client.write("world!\r\n");
});
