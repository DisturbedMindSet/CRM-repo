import http from "http";
import express from "express";
import bodyParser from "body-parser";
import logging from "./config/logging";
import config from "./config/config";

import cors from "cors";

const NAMESPACE = "server";
const router = express();

router.use((req, res, next) => {
	logging.info(
		NAMESPACE,
		`METHOD - [${req.method}],
       URL - [${req.url}], 
       IP - [${req.socket.remoteAddress}]`,
	);

	res.on("finish", () => {
		logging.info(
			NAMESPACE,
			`METHOD - [${req.method}],
          URL - [${req.url}], 
          IP - [${req.socket.remoteAddress}]
          STATUS - [${res.statusCode}]`,
		);
	});
});

router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json());

// Rules of API
router.use((req, res, next) => {
	var origin = "http://localhost:4000";
	res.header("Access-Control-Allow-origin", "origin"); //mudar para o IP ou criar var em config
	res.header(
		"access-Control-Allow-Headers",
		"origin, X-Requested-With, Content-Type, Accept, Authorization",
	);

	if (req.method == "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
		return res.status(200).json({});
	}
});

// Routes

// Error Handling

router.use((req, res, next) => {
	const error = new Error("not found");

	return res.status(404).json({
		message: error.message,
	});
});

// create the server

const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () =>
	logging.info(NAMESPACE, `server running on ${config.server.hostname}:${config.server.port}`),
);
