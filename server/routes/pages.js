const express = require("express");
const path = require("path");
// const publicDirectory = path.join(__dirname, ".../client");
console.log(__dirname);

const router = express.Router();

router.get("/", (request, response) => {
	response.sendFile("index.html", { root: "../client/view" });
});

// , { root: publicDirectory + "/view" }

// app.get("/", (request, response) => {
//
// });

module.exports = router;
