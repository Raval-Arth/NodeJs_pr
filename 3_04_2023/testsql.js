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
  var insertSql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [["Company Inc", "Highway 37"]];
  con.query(insertSql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

  //   select from table
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    // console log name;
    console.log(result[0]);
  });

  //   where table
  con.query(
    "SELECT * FROM customers WHERE address = 'Highway 37'",
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

  // order by
  con.query(
    "SELECT * FROM customers ORDER BY name",
    function (err, result, fields) {
      if (err) throw err;
      console.log("\nORDER BY --> " + JSON.stringify(result));
    }
  );

  // delete from table
  con.query(
    "DELETE FROM customers WHERE address = 'Highway 37'",
    function (err, result, fields) {
      if (err) throw err;
      console.log("\nDELETE --> " + JSON.stringify(result));
    }
  );

  // update table
  con.query(
    "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Highway 37'",
    function (err, result, fields) {
      if (err) throw err;
      console.log("\nUPDATE --> " + JSON.stringify(result));
    }
  );

  // LIMIT the Result
  con.query("SELECT * FROM customers LIMIT 5", function (err, result, fields) {
    if (err) throw err;
    console.log("\nLIMIT --> " + JSON.stringify(result));
  });

  // FOR JOIN TABLES
  /*
  SELECT users.name AS user, products.name As favorite From users JOIN products ON users.favorite_product = products.id
  SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id
  */
});
