const db = require("./../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (req, res, next) => {
	console.log(req.body);

	const { email, password } = req.body;
	console.log(req.body.email);
	console.log(req.body.pass);

	// return res.render("login", {
	// 	message: "Email or password incorrect",
	// })

	if (!email) {
		return res.render("login", {
			message: "Please enter valid Email",
		});
	} else if (!password) {
		res.setTimeout(function () {
			res.render({
				message: "Please enter valid password",
			});
		}, 10000);
	} else {
		var sql = "SELECT * FROM users WHERE email =?";

		console.log(db);

		db.connection.query(sql, [email], async (error, results) => {
			if (error) {
				console.log(error);

				return;
			}

			if (!results[0] || !(await bcrypt.compare(password, results[0].password))) {
				return res.render("login", {
					message: "incorrect Email or password!",
				});
			} else {
				const token = jwt.sign({ email: results[0].email }, process.env.JWT_SECRET, {
					expiresIn: process.env.JWT_EXPIRES,
					httpOnly: true,
				});
				const cookieOptions = {
					expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
					httpOnly: true,
				};
				res.cookie("userRegister", token, cookieOptions);

				return res.render("user", {});
			}

			// check password
			// bcrypt.compare(
			//    password,
			//    results[0]["password"],
			//    (bError, bResult)({
			//       if(bError) {
			//          console.log(bError);
			//          return res.render("login", {
			//             message: " Password is incorrect",
			//          });
			//       },
			//       if(bResult) {
			//          console.log("linha101:" + bResult);

			//          const token = jwt.sign(
			//             {
			//                email: results[0].email,
			//             },
			//             "SECRETKEY",
			//             {
			//                expiresIn: "7d",
			//             },
			//          );

			//          db.connection.query(
			//             `UPDATE users SET last_login = now() where email = ${results[0].email} `,
			//          );

			//          return;
			//       },
			//    }),
			// );

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
	}
};

module.exports = login;
