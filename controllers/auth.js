const User = require("../Models/User");
const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const { CONFIG } = require("../config/config");
const sendEmail = require("../utils/sendEmail");
const errorResponse = require("../utils/errorResponse");
const roles = require("../config/roles_list");
const { set } = require("date-fns");

const register = async (req, res, next) => {
	const { username, email, password } = req.body;

	try {
		const user = await User.create({
			username,
			email,
			password,
			roles: roles.User,
			signedToken: "",
			refreshToken: "",
		});

		console.log(user);

		sendToken(user, 201, res);
	} catch (error) {
		next(error);
	}
};

const login = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return next(new ErrorResponse("Please provide an email and password"), 400);
	}

	try {
		const user = await User.findOne({ email }).select("+password");

		if (!user) {
			return next(new ErrorResponse("Invalid credentials"), 401);
		}

		const isMatch = await user.matchPasswords(password);

		if (!isMatch) {
			return next(new ErrorResponse("Invalid credentials"), 401);
		}

		sendToken(user, 200, res);
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
};

const forgotPassword = async (req, res, next) => {
	const { email } = req.body;

	try {
		const pessoa = await User.findOne({ email });

		if (!pessoa) {
			return next(new ErrorResponse("Email could not be sent", 404));
		}

		const resetToken = pessoa.getResetPasswordToken();

		// * save
		await pessoa.save();

		const resetUrl = `${CONFIG.server.url}passwordreset/${resetToken}`;
		console.log(resetUrl);
		// ! Loading message from template parcial HBS.
		// *TODO  dynamic send data to variable in hbs.
		//* message:
		// *<h1>you have requested a password reset</h1>
		// *<p>Please go to this link to reset your password</p>
		//
		const message = `
			<h1>you have requested a password reset</h1>
			<p>Please go to this link to reset your password</p>
			<a href="${resetUrl}" clicktracking=off">${resetUrl}</a>
		`;

		try {
			await sendEmail({
				to: pessoa.email,
				subject: "Password Reset Request",
				text: message,
			});

			res.status(200).json({
				success: true,
				data: "Email Sent",
			});
		} catch (error) {
			pessoa.resetPasswordToken = undefined;
			pessoa.resetPasswordExpired = undefined;

			await pessoa.save();

			return next(new errorResponse("Email could not be send"), 500);
		}
	} catch (error) {
		next(error);
	}
};

const resetPassword = async (req, res, next) => {
	const resetPasswordToken = crypto
		.createHash("sha256")
		.update(req.params.resetToken)
		.digest("hex");

	try {
		const pessoa = await User.findOne({
			resetPasswordToken,
			resetPasswordExpired: { $gt: Date.now() },
		});

		if (!pessoa) {
			return next(new ErrorResponse("Invalid Reset Token"), 400);
		}

		pessoa.password = req.body.password;
		pessoa.resetPasswordToken = undefined;
		pessoa.resetPasswordExpired = undefined;

		await pessoa.save();

		res.status(201).json({
			success: true,
			data: "Password Reset Success",
		});
	} catch (error) {
		next(error);
	}
};

//** functions */
const sendToken = async (user, statusCode, res) => {
	const token = user.getSignedToken();
	const refreshToken = user.getSignedRefreshToken();
	console.log("userEmail: " + user.email);
	await User.updateOne(
		{ email: user.email },
		{ $set: { signedToken: token, signedRefreshToken: refreshToken } },
	);
	
	res
		.status(statusCode)
		.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true })
		.json({
			success: true,
			token,
		});
};

module.exports = { register, login, forgotPassword, resetPassword };
