const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { CONFIG } = require("../config/config");
const roles = require("../config/roles_list");

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Please provide a username"],
	},
	email: {
		type: String,
		required: [true, "Please provide a email"],
		unique: true,
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			"Please provide a valid email",
		],
	},
	password: {
		type: String,
		required: ["Please add a password"],
		minlength: 6,
		select: false,
	},
	roles: { type: String },
	signedToken: { type: String },
	signedTokenExpired: { type: Date },
	signedRefreshToken: { type: String },
	signedRefreshTokenExpired: { type: Date },
	resetPasswordToken: { type: String },
	resetPasswordExpired: { type: Date },
});

UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

UserSchema.methods.matchPasswords = async function (password) {
	return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedToken = function () {
	return jwt.sign({ id: this._id }, CONFIG.server.Token.access_Token, {
		expiresIn: CONFIG.server.Token.access_Token_ExpireDate,
	});
};

UserSchema.methods.getSignedRefreshToken = function () {
	return jwt.sign({ id: this._id }, CONFIG.server.Token.refresh_Token, {
		expiresIn: CONFIG.server.Token.refresh_Token_ExpireDate,
	});
};

UserSchema.methods.getResetPasswordToken = function () {
	const resetToken = crypto.randomBytes(20).toString("hex");

	this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
	this.resetPasswordExpired = Date.now() + 10 * (60 * 1000);

	return resetToken;
};

const User = mongoose.model("user", UserSchema);

module.exports = User;
