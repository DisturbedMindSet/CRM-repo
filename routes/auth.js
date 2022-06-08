const express = require("express");
const authController = require("../controllers/auth");

// const publicDirectory = path.join(__dirname, ".../client");

const router = express.Router();

router.post("/register", authController.register);

// , { root: publicDirectory + "/view" }

// app.get("/", (request, response) => {
//
// });

module.exports = router;
