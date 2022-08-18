import { useRef, useState, useEffect } from "react";
import { navigate, uselocation } from "react-router-dom";
import axios from "../../api/axios";

const PrivateScreen = () => {
	const [error, setError] = useState("");
	const [privateData, setPrivateData] = useState("");

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/login");
		}

		const fetchPrivateData = async () => {
			const config = {
				header: {
					"content-type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			};

			try {
				const { data } = await axios.get("api/private", config);
				setPrivateData(data.data);
			} catch (error) {
				localStorage.removeItem("token");
				setError("You are not authorized, please login ");
				//
				//* redirect to login page
				setTimeout(() => {
					navigate("/login");
				}, 3000);
			}
		};

		fetchPrivateData();
	}, []);

	return error ? (
		<span className="error">{error}</span>
	) : (
		<>
			<div>{privateData}</div>
		</>
	);
};

export default PrivateScreen;
