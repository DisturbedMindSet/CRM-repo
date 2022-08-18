const jwt = require("jsonwebtoken");
const { CONFIG } = require("../config/config");
const User = require("../Models/User");
const ErrorResponse = require("../utils/errorResponse");

const protect = async (req, res, next) => {
	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
		token = req.headers.authorization.split(" ")[1];
	}

	if (!token) {
		return next(new ErrorResponse("Not authorized to access this route", 401));
	}

	try {
		const decoded = jwt.verify(token, CONFIG.server.Token.access_Token);

		const pessoa = await User.findById(decoded.id);

		if (!pessoa) {
			return next(new ErrorResponse("No user Found with this id", 404));
		}

		req.user = pessoa;

		next();
	} catch (error) {
		console.log(error);
		return next(new ErrorResponse("Not authorized to access this route", 401));
	}
};

module.exports = protect;
