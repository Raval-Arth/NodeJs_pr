var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("\nConnected!");

  //   Alter table
  //   con.query(
  //     "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY",
  //     function (err, result) {
  //       if (err) throw err;
  //       console.log("Table ALtered");
  //     }
  //   );

  //   insert into table
  //   var insertSql = "INSERT INTO customers (name, address) VALUES ?";
  //   var values = [
  //     ["Company Inc", "Highway 37"],
  //   ];
  //   con.query(insertSql, [values], function (err, result) {
  //     if (err) throw err;
  //     console.log("Number of records inserted: " + result.affectedRows);
  //   });

  //   select from table
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    // console log name;
    console.log(result[0]);
  });

  //   where table
  con.query(
    "SELECT * FROM customers WHERE address = 'Highway 71'",
    function (err, result, fields) {
      if (err) throw err;
      // console log name;
      console.log(
        "\nWHERE --> " + JSON.stringify(result) + " -- " + result[0].name
      );
    }
  );

  //   wildcard characters
  con.query(
    "SELECT * FROM customers WHERE address LIKE 'H%'",
    function (err, result, fields) {
      if (err) throw err;
      // console log name;
      console.log("\nWILDCARD --> " + JSON.stringify(result));
    }
  );

  //   Escaping Query Values
  var name = "John";
  var address = "Mountain 21";
  con.query(
    "SELECT * FROM customers WHERE name = ? OR address = ?" +
      mysql.escape(address),
    [name, address],
    function (err, result, fields) {
      if (err) throw err;
      // console log name;
      console.log("\nESCAPING --> " + JSON.stringify(result));
    }
  );
});
