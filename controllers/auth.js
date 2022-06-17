const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = (req, res) => {
	console.log(req.body);

	const { name, email, password, passwordConfirm } = req.body;
	var sql = "SELECT email FROM users WHERE email =?";

	// query= sql // data = argumento
	//const vary =  runQuery(sql,argumento)
	// Depois os ifs

	db.query(sql, [email], async (error, results) => {
		if (error) {
			console.log(error);

			return;
		}

		// console.log(Object.keys(results));
		if (Object.keys(results).length > 0) {
			return res.render("register", {
				message: "that email is already in use",
			});
		} else if (password !== passwordConfirm) {
			return res.render("register", {
				messagePassWord: "Passwords do not Match",
			});
		}

		let hashedPassword = await bcrypt.hash(password, 8);

		console.log(hashedPassword);

		db.query(
			"INSERT INTO users SET ?",
			{ name: name, email: email, password: hashedPassword },
			(error, results) => {
				if (error) {
					console.log(error);
				} else {
					console.log(results);
					return res.render("register", {
						messagePassWord: "User registered",
					});
				}
			},
		);
	});

	// db.query('SELECT * FROM user WHERE id = "1"', (error, rows) => {
	// 	if (error) {
	// 		throw error;
	// 	}

	// 	if (!error) {
	// 		console.log(rows);
	// 	}
	// });
};
