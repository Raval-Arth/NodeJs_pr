const querystring = require("querystring");

// Specify the URL query string
// to be parsed
let urlQuery = "username=user1&units=kgs&units=pounds&permission=false";

// Use the parse() method on the string
let parsedObject = querystring.parse(urlQuery);

console.log("Parsed Query:", parsedObject);

// Use the parse() method on the string
// with sep as `&&` and eq as `-`
urlQuery = "username-user1&&units-kgs&&units-pounds&&permission-false";
parsedObject = querystring.parse(urlQuery, "&&", "-");

console.log("\nParsed Query:", parsedObject);

urlQuery = "user=admin&articles=1&articles=2&articles=3&access=true";
parsedObject = querystring.parse(urlQuery, "&", "=", { maxKeys: 5 });
console.log("\nParsed Query:", parsedObject);

let urlObject = {
  user: "sam",
  access: true,
  role: ["admin", "editor", "manager"],
};

console.log(querystring.stringify(urlObject));
console.log(querystring.stringify(urlObject, ",", ":"));

