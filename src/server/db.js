// const { config } = require("dotenv");
// const mysql = require("mysql");

// const conf = {
// 	connectionLimit: 10,
// 	host: process.env.DATABASE_HOST,
// 	user: process.env.DATABASE_USER,
// 	password: process.env.DATABASE_PASSWORD,
// 	database: process.env.DATABASE,
// };

// var db = mysql.createPool(conf);

// exports.connection = {
// 	query: function () {
// 		var queryArgs = Array.prototype.slice.call(arguments),
// 			events = [],
// 			eventNameIndex = {};

// 		db.getConnection(function (err, conn) {
// 			if (err) {
// 				if (eventNameIndex.error) {
// 					eventNameIndex.error();
// 				}
// 			}
// 			if (conn) {
// 				var q = conn.query.apply(conn, queryArgs);
// 				q.on("end", function () {
// 					conn.release();
// 				});

// 				events.forEach(function (args) {
// 					q.on.apply(q, args);
// 				});
// 			}
// 		});

// 		return {
// 			on: function (eventName, callback) {
// 				events.push(Array.prototype.slice.call(arguments));
// 				eventNameIndex[eventName] = callback;
// 				return this;
// 			},
// 		};
// 	},
// };
// // function handleDisconnect() {
// // 	db = mysql.createPool(conn);

// // 	var getConnection = function (callback) {
// // 		db.getConnection(function (err, connection) {
// // 			callback(err, connection);
// // 		});
// // 	};
// // 	// db.connect(function (err) {
// // 	// 	if (err) {
// // 	// 		console.log("error when connecting to db:", err);

// // 	// 		setTimeout(handleDisconnect, 1000);
// // 	// 	} else {
// // 	// 		console.log("successFull connection");
// // 	// 	}
// // 	// });
// // 	db.on("error", function (err) {
// // 		console.log("db error", err);

// // 		if (err.code === "PROTOCOL_CONNECTION_LOST") {
// // 			handleDisconnect();
// // 		} else {
// // 			throw err;
// // 		}
// // 	});
// // }
// // handleDisconnect();

// // create function for query
// // async function runQuery(query,data){

// // 	handleDisconnect()
// // 	const result = await db.query(query [data], function(error, results){
// // 		if (error) {
// // 			console.log(error);
// // 			return;
// // 		}

// // 	})

// // }
