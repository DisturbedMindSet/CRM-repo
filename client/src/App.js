import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// * Routing;
// import PrivateRoute from "./components/routing/PrivateRoute";

// * Screens;
// import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./Pages/login/LoginScreen";
import RegisterScreen from "./Pages/register/RegisterScreen";
import ForgotPasswordScreen from "./Pages/forgotpassword/ForgotPasswordScreen";
// import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import HomeScreen from "./Pages/dashboard/HomeScreen";

import Layout from "./components/layout/layout";
import RequireAuth from "./routing/requireAuth";
import TestScreen from "./Pages/TestScreen";
import Customer from "./Pages/customer/Customer";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* <PrivateRoute exact path="/" component={PrivateScreen} /> */}
				{/* Public ROutes */}
				<Route path="/" navigate element={<Navigate to="/login" replace />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/register" element={<RegisterScreen />} />

				<Route path="/forgotpassword" element={<ForgotPasswordScreen />} />

				{/* <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen} /> */}

				{/* TestScreen */}
				<Route path="/test/*" element={<HomeScreen />} />
				<Route path="/test/costumer" element={<Customer />} />
				{/*  route dashboard */}

				<Route element={<RequireAuth />}>
					<Route path="/home" element={<TestScreen />} />
				</Route>
				{/* unauthorized user */}
				{/* <Route  path="/unauthorized" element={<Unauthorized />} /> */}
				{/* not found page 404 Page */}
				{/* <Route  path="*" element={<Missing />} /> */}
			</Route>
		</Routes>
	);
};

export default App;
