const myURL = new URL("https://example.org/foo#ram");

// // Display href value of myURL before change
console.log("Before Change");
console.log(myURL.href);

// // assigning fragment portion
// // using hash
console.log();
myURL.hash = "rahim";

// // Display href value of myURL after change
console.log("After Change");
console.log(myURL.href);

// myURL.host = "example.com:82";
console.log("myURL.href --> " + myURL.host);

const URL_1 = new URL("https://www.geeksforgeeks.org/geeks?articles=1");
const URL_2 = new URL("https://ashish:ashish123@www.geeksforgeeks.org");
//Getting origin of above created URL_1 object
console.log(URL_1.origin);
console.log(URL_2.username);
console.log(URL_1.search);
console.log(URL_1.href);

URL_1.port = "12345";
console.log(URL_1.port);

URL_1.pathname = "geeksforgeeks";
console.log(URL_1.href);
console.log(URL_1.password);
URL_1.password = "123";
console.log(URL_1.href);
console.log(URL_1.password);
