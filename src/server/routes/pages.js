const express = require("express");
const path = require("path");
const router = express.Router();
// const publicDirectory = path.join(__dirname, ".../client");

router.get("/", (req, res) => {
	res.redirect("login");
});

router.get("/login", (req, res) => {
	res.render("login");
});

router.get("/register", (req, res) => {
	res.render("register");
});

router.get("/user", (req, res) => {
	res.json("any");
});

module.exports = router;
