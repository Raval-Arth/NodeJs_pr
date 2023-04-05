console.clear();

let dgram = require("dgram");
let client = dgram.createSocket("udp4");
let server = dgram.createSocket("udp4");

server
  .on("message", (msg, rinfo) => {
    process.stdout.write("UDP String: " + msg + "\n");
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    process.exit();
  })
  .bind(1234, () => {
    // Getting the address information for
    // the server by using address() method
    const address = server.address();

    // Display the result
    console.log(address);
    server.addMembership("224.0.0.114");
    server.dropMembership("224.0.0.114");

    const size = server.getRecvBufferSize();

    // Display the result
    console.log(size);

    server.setTTL(144);

    server.setMulticastTTL(255);
  });

server.connect(1234, "localhost", () => {
  console.log("connected");
});

// Client sending message to server on 0.0.0.0  port 1234
// client.send("Hello World", 1234, "0.0.0.0");
client.send("Hello World", 1234, "0.0.0.0");
client.send("Hello World", 0, 7, 1234, "localhost");
