const errorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
	let error = { ...err };

	error.message = err.message;

	// error on mongoose
	if (err.code === 11000) {
		const message = "Duplicate Field Value Enter";
		error = new errorResponse(message, 400);
	}

	// error on mongoose
	if (error.name === "ValidationError") {
		const message = Object.values(err.errors).map(val => val.message);

		error = new errorResponse(message, 400);
	}

	res.status(error.statusCode || 500).json({
		sucess: false,
		error: error.message || "Server Error",
	});
};

module.exports = errorHandler;
