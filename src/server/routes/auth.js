const express = require("express");
const authController = require("../controllers/auth");

// const publicDirectory = path.join(__dirname, ".../client");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/user", authController.user);

// response.sendFile("index", { root: path.join(__dirname, "../../client/view/") });});
// , { root: publicDirectory + "/view" }

// app.get("/", (request, response) => {
//
// });

module.exports = router;
