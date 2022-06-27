const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const cookie = require("cookie-parser");

const app = express();
const { engine } = require("express-handlebars");
const hbs = require("express-handlebars");

// dotenv.config({
// 	path: "./.env",
// });

const { req, res } = require("express");
const { dirname } = require("path");
const { handlebars } = require("hbs");

console.log("App.js : " + __dirname);

const publicDirectory = path.join(__dirname, "./../public");
console.log("publicDirectory: " + publicDirectory);
app.use(express.static(publicDirectory));

// app.set("views", path.join(__dirname));
app.set("views", path.join(publicDirectory, "./views/layouts"));
app.set("view engine", "hbs");

console.log(__dirname);
app.engine(
	"hbs",
	engine({
		extname: ".hbs",
		defaultLayout: "",
		layoutsDir: path.join(__dirname, "./../views/layouts"),
		partialsDir: path.join(__dirname, "./../views/partials"),
	}),
);

app.use(cors());
app.use(cookie());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 4000;

app.listen(port);
console.log(`server is running on ${port}`);

// app.use(express.static("./client/view/index.html"));

// create

// app.post("/insert", (request, response) => {});

// read

// update

// delete

app.get("/", (req, res) => {
	res.redirect("login");
});

// DEFINE ROUTES
// app.use("/", require("./routes/pages"));
// app.use("/auth", require("./controllers/auth"));
