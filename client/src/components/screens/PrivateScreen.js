import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

const PrivateScreen = () => {
	const [error, setError] = useState("");
	const [privateData, setPrivateData] = useState("");

	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem("authToken")) {
			navigate("/login");
		}

		const fetchPrivateData = async () => {
			const config = {
				header: {
					"content-type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("authToken")}`,
				},
			};

			try {
				const { data } = await axios.get("api/private", config);
				setPrivateData(data.data);
			} catch (error) {
				localStorage.removeItem("authToken");
				setError("You are not authorized, please login ");
				//
				//* redirect to login page
				setTimeout(() => {
					navigate("/login");
				}, 3000);
			}
		};

		fetchPrivateData();
	}, [navigate]);

	const logoutHandler = () => {
		localStorage.removeItem("authToken");
		navigate("/login");
	};

	return error ? (
		<span className="error">{error}</span>
	) : (
		<>
			<div>{privateData}</div>
			<button onClick={logoutHandler}>Logout</button>
		</>
	);
};

export default PrivateScreen;
