const express = require("express");
const authController = require("../controllers/register");

// const publicDirectory = path.join(__dirname, ".../client");

const router = express.Router();

// http://localhost:4000/register - post
router.post("/register", authController.register);

// http://localhost:4000/login - post
router.post("/login", authController.login);

// response.sendFile("index", { root: path.join(__dirname, "../../client/view/") });});
// , { root: publicDirectory + "/view" }

// app.get("/", (request, response) => {
//
// });

module.exports = router;
