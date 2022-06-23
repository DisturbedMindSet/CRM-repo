const db = require("./../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
	console.log(req.body);

	const { name, email, password, passwordConfirm } = req.body;

	// Validar Registo

	// return res.status(400).render("register", {
	// 	message: "Please enter a valid username",
	// });

	res.send(req.body);

	if (!name || !password) {
		return res.json({
			status: "error",
			error: "Please enter a valid username",
		});
	} else if (password !== passwordConfirm) {
		return res.json({
			status: "error",
			error: "Both password must match",
		});
	} else {
		db.connection.query(
			"SELECT email FROM users WHERE email =?",
			[email],
			async (error, results) => {
				if (error) {
					console.log(error);

					return;
				}

				// console.log(Object.keys(results));
				if (results.length > 0) {
					return res.json({
						status: "error",
						error: "that email is already in use",
					});
				}

				const hashedPassword = await bcrypt.hash(password, 8);

				console.log(hashedPassword);

				db.connection.query(
					"INSERT INTO users SET ?",
					{ name: name, email: email, password: hashedPassword },
					(error, results) => {
						if (error) {
							console.log(error);
						} else {
							console.log("results:", results);
							return res.json({
								status: "success",
								success: "User registered",
							});
						}
					},
				);
			},
		);
	}

	// next();

	// query= sql // data = argumento
	//const vary =  runQuery(sql,argumento)
	// Depois os ifs

	// db.query('SELECT * FROM user WHERE id = "1"', (error, rows) => {
	// 	if (error) {
	// 		throw error;
	// 	}

	// 	if (!error) {
	// 		console.log(rows);
	// 	}
	// });
};

module.exports = register;
