const nodemailer = require("nodemailer");
const { CONFIG } = require("../config/config");

const sendEmail = options => {
	const transporter = nodemailer.createTransport({
		service: CONFIG.Email.EmailService,
		auth: {
			user: CONFIG.Email.EmailUsername,
			pass: CONFIG.Email.EmailPassword,
		},
		// !DO not do this in production
		tls: {
			rejectUnauthorized: false,
		},
	});

	const mailOptions = {
		from: CONFIG.Email.EmailFrom,
		to: options.to,
		subject: options.subject,
		html: options.text,
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log(err);
		} else {
			console.log(info);
		}
	});
};

module.exports = sendEmail;
