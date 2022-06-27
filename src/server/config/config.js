import dotenv from "dotenv";

dotenv.config();

const MONGO_OPTIONS = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	keepAlive: true,
	socketTimeoutMS: 30000,
	poolSize: 50,
	autoIndex: false,
	retryWrites: false,
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.PORT || 4000;

const SERVER = {
	hostname: SERVER_HOSTNAME,
	port: SERVER_PORT,
};

const config = {
	server: SERVER,
};

export default config;
