const express = require("express");
const router = express.Router();
const db = require("./../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = require("./register");
const login = require("./login");

// http://localhost:4000/register - post
router.post("/register", register);

// http://localhost:4000/login - post
router.post("/login", login);

module.exports = router;
