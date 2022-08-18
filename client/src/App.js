import { Routes, Route } from "react-router-dom";

// * Routing;
// import PrivateRoute from "./components/routing/PrivateRoute";

// * Screens;
// import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/login/LoginScreen";
import RegisterScreen from "./components/screens/register/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/forgotpassword/ForgotPasswordScreen";
// import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import HomeScreen from "./components/screens/dashboard/HomeScreen";

import Layout from "./components/layout/layout";
import RequireAuth from "./components/routing/requireAuth";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* <PrivateRoute exact path="/" component={PrivateScreen} /> */}
				{/* Public ROutes */}

				<Route path="/login" element={<LoginScreen />} />
				<Route path="/register" element={<RegisterScreen />} />

				<Route path="/forgotpassword" element={<ForgotPasswordScreen />} />

				{/* <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen} /> */}

				{/*  route dashboard */}

				<Route element={<RequireAuth />}>
					<Route path="/home" element={<HomeScreen />} />
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
