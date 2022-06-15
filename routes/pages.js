const express = require("express");
const path = require("path");
// const publicDirectory = path.join(__dirname, ".../client");

const router = express.Router();

router.get("/", (req, res) => {
	// response.sendFile("index", { root: path.join(__dirname, "../../client/view/") });
	res.render("index");
});

router.get("/login", (req, res) => {
	// response.sendFile("index", { root: path.join(__dirname, "../../client/view/") });
	res.render("index");
});

router.get("/register", (req, res) => {
	// response.sendFile("index", { root: path.join(__dirname, "../../client/view/") });
	res.render("register");
});

router.get("/user", (req, res) => {
	// response.sendFile("index", { root: path.join(__dirname, "../../client/view/") });
	res.render("user");
});

module.exports = router;
