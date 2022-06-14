const mysql = require("mysql");

const conn = {
	connectionLimit: 10,
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE,
};

function handleDisconnect() {
	db = mysql.createPool(conn);

	// db.connect(function (err) {
	// 	if (err) {
	// 		console.log("error when connecting to db:", err);

	// 		setTimeout(handleDisconnect, 1000);
	// 	} else {
	// 		console.log("successFull connection");
	// 	}
	// });
	db.on("error", function (err) {
		console.log("db error", err);

		if (err.code === "PROTOCOL_CONNECTION_LOST") {
			handleDisconnect();
		} else {
			throw err;
		}
	});
}
handleDisconnect();

module.exports = db;
