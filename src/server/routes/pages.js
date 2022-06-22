const express = require("express");
const path = require("path");
const router = express.Router();
// const publicDirectory = path.join(__dirname, ".../client");


router.get("/", (req, res) => {
	// response.sendFile("index", { root: path.join(__dirname, "../../client/view/") });
	res.render("login");
});

router.get("/login", (req, res) => {
	// response.sendFile("index", { root: path.join(__dirname, "../../client/view/") });
	res.render("login");
});

router.get("/register", (req, res) => {
	// response.sendFile("index", { root: path.join(__dirname, "../../client/view/") });
	res.render("register");
});
router.get("/user", (req, res) => {
	// response.sendFile("index", { root: path.join(__dirname, "../../client/view/") });
	res.json("any");
});

module.exports = router;
