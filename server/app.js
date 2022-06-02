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

const publicDirectory = path.join(__dirname, "../client");
console.log(__dirname);
console.log(1 + "- " + publicDirectory);
app.use(express.static(publicDirectory));

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

app.get("/", (request, response) => {
	response.sendFile("index.html", { root: publicDirectory + "/view" });
});

// update

// delete

app.listen(process.env.PORT, () => {
	console.log("app is running");
});
