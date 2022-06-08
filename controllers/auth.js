const { reset } = require("nodemon");
const db = require("../db");

exports.register = (req, resp) => {
	console.log(req.body);

	const { name, email, password, passwordConfirm } = req.body;

	db.query("SELECT email FROM users WHERE email =?", [email], (error, results) => {
		if (error) {
			console.log(error);
		}
		if (results.length > 0) {
			return res.render("user", {
				message: "that email is already in use",
			});
		} else if (password !== passwordConfirm) {
			return res.render("user", {
				message: "the password do not match",
			});
		}
	});

	resp.send("form submitted");
};
