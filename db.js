const mysql = require("mysql");

// const conn = {
// 	connectionLimit: 10,
// 	host: process.env.DATABASE_HOST,
// 	user: process.env.DATABASE_USER,
// 	password: process.env.DATABASE_PASSWORD,
// 	database: process.env.DATABASE,
// };

// function handleDisconnect() {
// 	db = mysql.createConnection(conn);

// 	db.connect(function (err) {
// 		if (err) {
// 			console.log("error when connecting to db:", err);

// 			setTimeout(handleDisconnect, 2000);
// 		} else {
// 			console.log("successFull connection");
// 		}
// 	});
// 	db.on("error", function (err) {
// 		console.log("db error", err);

// 		if (err.code === "PROTOCOL_CONNECTION_LOST") {
// 			handleDisconnect();
// 		} else {
// 			throw err;
// 		}
// 	});
// }
// handleDisconnect();



let sequelize;

if (process.env.CLEARDB_DATABASE_URL) {
  sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}


module.exports = db;
