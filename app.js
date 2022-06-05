const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({
	path: "./.env",
});

const { request, response } = require("express");

const db = mysql.createConnection({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE,
});

db.connect(error => {
	if (error) {
		console.log(error);
	} else {
		console.log("Mysql connected");
	}
});

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// create

app.post("/insert", (request, response) => {});

// read

// update

// delete

// DEFINE ROUTES
app.use("/", require("./server/routes/pages"));
app.use("/auth", require("./server/routes/auth"));

app.listen(process.env.PORT, () => {
	console.log("app is running");
});
