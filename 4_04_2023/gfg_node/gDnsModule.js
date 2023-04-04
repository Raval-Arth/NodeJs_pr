const dns = require("dns");
const website = `www.google.com`;
dns.lookup(website, (err, address, family) => {
  if (err) {
    console.log(err);
  }
  console.log("address of %s is %j family: IPv%s", website, address, family);
  dns.reverse(address, function (err, hostnames) {
    console.log("reverse for " + address + ": " + JSON.stringify(hostnames));
  });
});

console.log("\n-->" + dns.getServers());

dns.lookupService("127.0.0.1", 22, (err, hostname, service) => {
  // Printing hostname and service as callback
  console.log("\n==> " + hostname, service);
});

const rrtype = "TXT";

dns.resolve("geeksforgeeks.org", rrtype, (err, records) =>
  console.log("records: %j", records)
);

dns.resolve4("geeksforgeeks.org", (err, address) =>
  console.log("address: %j", address)
);

dns.resolve6("geeksforgeeks.org", (err, address) =>
  console.log("address: %j", address)
);

dns.resolveAny("localhost", (err, ret) => console.log("records: %j", ret));

dns.resolveCname("localhost", (err, ret) => console.log("records: %j", ret));
