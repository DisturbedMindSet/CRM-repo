"use strict";

const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const getTimeStamp = new Date().toUTCString();

// var getTimeStamp = new Date().toUTCString();

// do function

const info = async (namespace, logName, message, Object) => {
	try {
		if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
			await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
		}
		if (Object) {
			const logItem = `[${getTimeStamp}]\t[INFO][${namespace}]${uuid()}${message}\t ${Object}\n`;
			await fsPromises.appendFile(path.join(__dirname, "..", "logs", logName), logItem);
		} else {
			const logItem = `[${getTimeStamp}]\t[INFO][${namespace}]${uuid()}${message}\t \n`;
			await fsPromises.appendFile(path.join(__dirname, "..", "logs", logName), logItem);
		}
	} catch (err) {
		console.log(err);
	}
};

const warn = async (namespace, logName, message, Object) => {
	try {
		if (!fs.existsSync(path.join(__dirname, "..", logName))) {
			await fsPromises.mkdir(path.join(__dirname, "..", logName));
		}
		if (Object) {
			const logItem = `[${getTimeStamp}]\t[WARN][${namespace}]${uuid()}${message}\t ${Object}\n`;
			await fsPromises.appendFile(path.join(__dirname, "..", "logs", logName), logItem);
		} else {
			const logItem = `[${getTimeStamp}]\t[WARN][${namespace}]${uuid()}${message}\t \n`;
			await fsPromises.appendFile(path.join(__dirname, "..", "logs", logName), logItem);
		}
	} catch (err) {
		console.log(err);
	}
};

const error = async (namespace, logName, message, Object) => {
	try {
		if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
			await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
		}
		if (Object) {
			const logItem = `[${getTimeStamp}]\t[ERROR][${namespace}]${uuid()}${message}\t ${Object}\n`;
			await fsPromises.appendFile(path.join(__dirname, "..", "logs", logName), logItem);
		} else {
			const logItem = `[${getTimeStamp}]\t[ERROR][${namespace}]${uuid()}${message}\t \n`;
			await fsPromises.appendFile(path.join(__dirname, "..", "logs", logName), logItem);
		}
	} catch (err) {
		console.log(err);
	}
};

const debug = async (namespace, logName, message, Object) => {
	try {
		if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
			await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
		}
		if (Object) {
			const logItem = `[${getTimeStamp}]\t[DEBUG][${namespace}]${uuid()}${message}\t ${Object}\n`;
			await fsPromises.appendFile(path.join(__dirname, "..", "logs", "logName"), logItem);
		} else {
			const logItem = `[${getTimeStamp}]\t[DEBUG][${namespace}]${uuid()}${message}\t \n`;
			await fsPromises.appendFile(path.join(__dirname, "..", "logs", "logName"), logItem);
		}
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	info,
	warn,
	error,
	debug,
};
