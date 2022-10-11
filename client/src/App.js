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

import RequireAuth from "./routing/requireAuth";
import TestScreen from "./Pages/TestScreen";
import Customers from "./Pages/customers/Customers";
import Products from "./Pages/Products/Products";
import Orders from "./Pages/orders/Orders";
import CustomerID from "./Pages/customers/customerID/customerID";
import Layout from "./Pages/layout/layout";

const App = () => {
	return (
		<Routes>
			<Route path="/">
				<Route path="/" navigate element={<Navigate to="/login" replace />} />
				<Route path="login" element={<LoginScreen />} />
				<Route path="register" element={<RegisterScreen />} />
				<Route path="forgotpassword" element={<ForgotPasswordScreen />} />
				{/* <Route path="/passwordreset/:resetToken" element={<ResetPasswordScreen />} /> */}
			</Route>

			<Route path="dashboard" element={<Layout />}>
				<Route index element={<HomeScreen />} />
				<Route path="customers">
					<Route index element={<Customers />} />
					<Route path=":customerId" element={<CustomerID />} />
				</Route>

				<Route path="products">
					<Route index element={<Products />} />
					{/* <Route path=":productId" element={<Single />} /> */}
				</Route>

				<Route path="orders">
					<Route index element={<Orders />} />
					{/* <Route path=":productId" element={<CustomerID />} /> */}
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
