const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const hbs = require("hbs");
const app = express();

dotenv.config({
	path: "./.env",
});

const port = process.env.PORT || 4000;

const { req, res } = require("express");
const { dirname } = require("path");

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

// app.set("views", path.join(__dirname));
app.set("view engine", "hbs");

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port);
console.log(`server is running on ${port}`);

// app.use(express.static("./client/view/index.html"));

// create

// app.post("/insert", (request, response) => {});

// read

// update

// delete

// DEFINE ROUTES
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));
