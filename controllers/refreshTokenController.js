const usersDB = require("../Model/testDB");
const jwt = require("jsonwebtoken");
const config = require("../config/config.js");

const refreshToken = (req, res, next) => {
	const cookies = req.cookies;
	if (!cookies?.jwt) return res.status(401);
	console.log(cookies.jwt);

	const refreshToken = cookies.jwt;

	const foundUser = usersDB.users.find(person => (person.refreshToken = refreshToken));

	if (!foundUser) return res.status(403); //Forbidden

	jwt.verify(refreshToken, config.config.server.Token.refresh_Token, (err, decoded) => {
		if (err || foundUser.email !== decoded.email) {
			return res.sendStatus(403); //Forbidden
		}
		const accessToken = jwt.sign(
			{ username: decoded.username },
			config.config.server.Token.access_Token,
			{ expiresIn: "300s" },
		);
		res.json({ accessToken });
	});
};

module.exports = { refreshToken };
