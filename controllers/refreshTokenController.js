const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const config = require("../config/config.js");

const refreshToken = async (req, res, next) => {
	const cookies = req.cookies;
	if (!cookies?.refreshToken) return res.status(401);
	console.log(cookies.refreshToken);

	const refreshToken = cookies.refreshToken;

	const foundUser = await User.findOne({ refreshToken });

	console.log("foundUser: " + foundUser);

	if (!foundUser) return res.status(403); //Forbidden

	const isValid = verifyRefreshToken(foundUser.email, refreshToken);

	if (!isValid) {
		return res.status(401).json({
			success: false,
			error: "invalid token",
		});
	}

	const accessToken = foundUser.getSignedToken();

	res.status(201).json({
		success: true,
		accessToken,
	});
};

const verifyRefreshToken = (email, refreshToken) => {
	try {
		const decoded = jwt.verify(
			refreshToken,
			config.CONFIG.server.Token.refresh_Token,
			(err, decoded) => {
				if (err) {
					return res.status(403).json({
						success: false,
						error: "Invalid token,try login again",
					});
				}

				return decoded.email === email;
			},
		);
	} catch (error) {
		return false;
	}
};

module.exports = { refreshToken };
