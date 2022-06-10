const { reset } = require("nodemon");
const db = require("../db");

exports.register = (req, res) => {
	console.log(req.body);

	const { name, email, password, passwordConfirm } = req.body;

	db.query("SELECT email FROM users WHERE email =?", [email], (error, results) => {
		if (error) {
			console.log(error);

			return;
		}

		// console.log(Object.keys(results));
		if (Object.keys(results).length > 0) {
			return res.render("register", { message: "that email is already in use" });
		}
		// // 	console.dir(res.headersSent);
		// } else if (password !== passwordConfirm) {
		// 	return res.render("test", {
		// 		message: "the password do not match",
		// 	});
		// 	console.dir(res.headersSent);
		// }
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
