const mysql = require("mysql");

const conn = {
	connectionLimit: 100,
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE,
};

console.log("database: " + conn.database);
console.log("host: " + conn.host);
console.log("user: " + conn.user);
console.log("password: " + conn.password);

function handleDisconnect() {
	db = mysql.createConnection(conn);

	db.connect(function (err) {
		if (err) {
			console.log("error when connecting to db:", err);

			setTimeout(handleDisconnect, 2000);
		} else {
			console.log("successFull connection");
		}
	});
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
