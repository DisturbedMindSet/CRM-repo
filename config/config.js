"use strict";
const env = require("dotenv");

env.config();

// * Send Emails with nodemailer

const Email = {
	EmailService: process.env.EmailService || "SendGrid",
	EmailUsername: process.env.EmailUsername || "apikey",
	EmailPassword:
		process.env.EmailPassword ||
		"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",
	EmailFrom: process.env.EmailFrom || "kl4usmik4elsonn@gmail.com",
};

const whiteList = ["https://www.yoursite.com", "http://localhost:4000", "http://localhost:3000"];
const corsOptions = {
	origin: (origin, callback) => {
		if (whiteList.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new error("not allowed by CORS"));
		}
	},
	optionsSuccessStatus: 200,
};

// * Mongo
const MONGO_URI = "mongodb://localhost/crmDB";

const MONGO_OPTIONS = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	keepAlive: true,
	socketTimeoutMS: 30000,
	poolSize: 50,
	autoIndex: false,
	retryWrites: false,
	useCreateIndex: true,
	useFindAndModify: true,
};

const MONGO = {
	MONGO_URI: "mongodb://localhost/crmDB",
	MONGO_OPTIONS: {
		keepAlive: true,
		socketTimeoutMS: 30000,
		autoIndex: false,
		retryWrites: false,
		useUnifiedTopology: true,
	},
};

// *dynamic data

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.PORT || 4000;

const SERVER_URL = process.env.SERVER_URL || `http://${SERVER_HOSTNAME}:${SERVER_PORT}/`;

const SERVER_ACCESS_TOKEN_SECRET =
	process.env.SERVER_ACCESS_TOKEN_SECRET ||
	"111163f0af2c53b9801d0dc7e5531bfa11e61860a946630ff50ee042a0290db6f3b2a0bd1936eb667cae358413b97d77e8d441299689bcd33d2906556ff3ad1f8a3b";

const SERVER_ACCESS_TOKEN_SECRET_Expire = process.env.SERVER_ACCESS_TOKEN_SECRET_Expire || "300"; //5min

const SERVER_REFRESH_TOKEN_SECRET =
	process.env.SERVER_REFRESH_TOKEN_SECRET ||
	"22356a2c03623979aa2498fee9b3e3a3ffa86880d799e35f851c2e62f2bc8c6044d04b71756ca8803b35925991b204a991e916f6e57cd8fd9c7564ce474397f2";

const SERVER_REFRESH_TOKEN_SECRET_EXPIRE =
	process.env.SERVER_REFRESH_TOKEN_SECRET_EXPIRE || "86400"; //24h

const SERVER = {
	hostname: SERVER_HOSTNAME,
	port: SERVER_PORT,
	url: SERVER_URL,
	Token: {
		access_Token: SERVER_ACCESS_TOKEN_SECRET,
		access_Token_ExpireDate: SERVER_ACCESS_TOKEN_SECRET_Expire,
		refresh_Token: SERVER_REFRESH_TOKEN_SECRET,
		refresh_Token_ExpireDate: SERVER_REFRESH_TOKEN_SECRET_EXPIRE,
	},
};

const CONFIG = {
	server: SERVER,
	corsOptions: corsOptions,
	MONGO: MONGO,
	Email: Email,
};

module.exports = { CONFIG };
