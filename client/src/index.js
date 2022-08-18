import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/authProvider";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Router>
			<AuthProvider>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</AuthProvider>
		</Router>
	</React.StrictMode>,
);

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById("root"),
// );

reportWebVitals();
