const { CONFIG } = require("./config/config.js");
const http = require("http");
const path = require("path");
const express = require("express");
const { appendFile } = require("fs");
const hbs = require("express-handlebars");
const cors = require("cors");

const logging = require("./Middleware/logging.js");
const cookie = require("cookie-parser");

const connectDB = require("./config/db");
const authRoute = require("./routes/auth");
const privateRoute = require("./routes/private");
const errorHandler = require("./Middleware/error");

const app = express();
const NAMESPACE = "server";

// connectDB
connectDB();

app.use((req, res, next) => {
	logging.info(NAMESPACE, "serverLog", `[METHOD]-${req.method},[URL] - ${req.url}`);

	res.on("finish", () => {
		logging.info(
			NAMESPACE,
			"appLog",
			`METHOD - [${req.method}],URL - [${req.url}],[STATUS] - ${res.statusCode},`,
		);
		// IP - [${req.socket.remoteAddress}]
	});

	next();
});

// Cors - cross origin resource sharing
app.use(cors(CONFIG.corsOptions));
// Built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));
// Built-in middleware for json
app.use(express.json());
// middleware for cookies
app.use(cookie());
//

//**  error Handler (should be last piece of middleware)
app.use(errorHandler);
//
// Rules of API
//
//
// app.use((req, res, next) => {
// 	// var origin = "http://localhost:4000";
// 	res.header("Access-Control-Allow-origin", "origin"); //mudar para o IP ou criar var em config
// 	res.header(
// 		"access-Control-Allow-Headers",
// 		"origin, X-Requested-With, Content-Type, Accept, Authorization",
// 	);

// 	if (req.method == "OPTIONS") {
// 		res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
// 		return res.status(200).json({});
// 	}

// 	next();
// });

//
// Server Files via hbs
//
// app.set("view engine", "hbs");
// app.set("views", path.join(__dirname + "/../public/views/layouts"));

// const publicDirectory = path.join(__dirname + "/../public");
// console.log("publicDirectory-Path: " + publicDirectory);
// app.use(express.static(publicDirectory));

// app.engine(
// 	"hbs",
// 	hbs.engine({
// 		extname: "hbs",
// 		defaultLayout: "",
// 		layoutsDir: publicDirectory + "../views/layouts)",
// 		partialsDir: publicDirectory + "./../views/partials",
// 	}),
// );
//
//
// Routes

app.use("/api/auth", authRoute);
app.use("/api/private", privateRoute);
//
//
// Error Handling ?

// app.use((req, res, next) => {
// 	const error = new Error("not found");

// 	return res.status(404).json({
// 		message: error.message,
// 	});
// });

//
// doesn't find page - error 404

// Verificar ISTO
// app.all("*", (req, res) => {
// 	logging.error(NAMESPACE, "404Log");
// 	res.status(404);
// 	if (req.accepted("html")) {
// 		res.render("404");
// 	} else if (req.accepted("json")) {
// 		res.json({ error: "404 Not found" });
// 	} else {
// 		res.type("txt").send("404 Not found");
// 	}
// });

// create the server

const httpServer = http.createServer(app);

const server = httpServer.listen(
	CONFIG.server.port,
	() =>
		// logging.info({NAMESPACE,`server running on ${config.server.hostname}:${config.server.port}`},server)
		logging.info(
			NAMESPACE,
			"serverLog",
			`server running on ${CONFIG.server.hostname}:${CONFIG.server.port}`,
		),
	console.log(`server running on ${CONFIG.server.hostname}:${CONFIG.server.port}`),
);

process.on("unhandledRejection", (err, promise) => {
	console.log(`Logged Error: ${err}`);
	server.close(() => process.exit(1));
});
