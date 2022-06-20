const db = require("./../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// const SECRETKEY = process.env.

exports.register = (req, res) => {
	console.log(req.body);

	const { name, email, password, passwordConfirm } = req.body;
	var sql = "SELECT email FROM users WHERE email =?";

	// query= sql // data = argumento
	//const vary =  runQuery(sql,argumento)
	// Depois os ifs

	db.connection.query(sql, [email], async (error, results) => {
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

		db.connection.query(
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

exports.login = (req, res) => {
	console.log(req.body);

	const { email, password } = req.body;
	console.log(req.body.email);
	console.log(req.body.pass);

	var sql = "SELECT email FROM users WHERE email =?";
	console.log("DEU");

	console.log(db);

	db.connection.query(sql, [email], async (error, results) => {
		if (error) {
			console.log(error);

			return;
		}

		if (!results.length) {
			return res.render("login", {
				message: "Username or password is incorrect!",
			});
		}

		// check password
		bcrypt.compare(
			password,
			results[0][password],
			(bError, bResult)({
				if(bError) {
					console.log(bError);
					return;
				},
				if(bResult) {
					const token = jwt.sign(
						{
							email: results[0].email,
						},
						"SECRETKEY",
						{
							expiresIn: "7d",
						},
					);

					db.connection.query(
						`UPDATE users SET last_login = now() where email = ${results[0].email} `,
					);

					return;
				},
			}),
		);
		return res.render("login", {});

		// if (Object.keys(results).length < 0) {
		// 	return res.render("register", {
		// 		message: "that email is already in use",
		// 	});
		// } else if (password !== passwordConfirm) {
		// 	return res.render("register", {
		// 		messagePassWord: "Passwords do not Match",
		// 	});
		// }
	});
};
