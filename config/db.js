const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
	try {
		await mongoose.connect(config.CONFIG.MONGO.MONGO_URI);
		console.log("MongoDB connected");
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = connectDB;
