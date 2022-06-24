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

router.use((req, res, next) => {
	res.header("Access-Control-Allow-origin", "http://localhost:4000/"); //mudar para o IP ou criar variavel em config
});
