import { useRef, useState, useEffect } from "react";
import axios from "../../api/axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

//custom css
import "./LoginScreen.css";

// bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const EMAIL_REGEX = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const LoginScreen = () => {
	const { setAuth } = useAuth();
	// const [token, setToken] = useState(null);

	// localStorage.getItem("token") || false);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from || "/home";
	// const from = location.state?.from?.pathname || "/";

	const userRef = useRef();
	const errRef = useRef();
	//
	//
	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);

	//
	const [password, setPassword] = useState("");
	const [validPassword, setValidPassword] = useState(false);

	//

	const [errMessage, setErrMessage] = useState("");

	useEffect(() => {
		userRef.current.focus();
	}, []);

	// ! verificar
	// useEffect(() => {
	// 	if (localStorage.getItem("token")) {
	// 		navigate(from, { replace: true });
	// 	}
	// }, [from, navigate]);

	// ! ////////////

	useEffect(() => {
		const result = EMAIL_REGEX.test(email);

		setValidEmail(result);
		console.log("email: " + result);
	}, [email]);

	useEffect(() => {
		const result = PASSWORD_REGEX.test(password);
		setValidPassword(result);
		console.log("pass: " + result);
	}, [password]);

	const loginHandler = async (e) => {
		e.preventDefault();

		const config = {
			Header: {
				"content-type": "application/json",
				withCredentials: true,
			},
		};

		try {
			const response = await axios.post("/api/auth/login", { email, password }, config);

			// clear state and controlled inputs

			const accessToken = response?.data?.token;
			const roles = response?.data?.roles;
			console.log(response.data);
			console.log(roles);

			setEmail("");
			setPassword("");

			localStorage.setItem("token", response.data.token);
			setAuth({ email, password, roles, accessToken });
			console.log("from : " + from);
			// ! verificar
			// console.log("setAuth " + setAuth({ email }));

			navigate(from, { replace: true });

			// ! /////
		} catch (error) {
			if (!error?.response) {
				setErrMessage("No Server Response");
				console.log(!error?.response);
				setTimeout(() => {
					setErrMessage("");
				}, 5000);
			} else if (error.response?.status === 409) {
				setErrMessage("Username Taken");
				setTimeout(() => {
					setErrMessage("");
				}, 5000);
			} else {
				setErrMessage("Registration Failed");
				setTimeout(() => {
					setErrMessage("");
				}, 5000);
			}
			errRef.current.focus();
		}
	};

	return (
		<body className="body">
			<div className="login__container">
				<div className="wrapper">
					<p ref={errRef} className={errMessage ? "errmessage" : "offscreen"} aria-live="assertive">
						{errMessage}
					</p>

					<form onSubmit={loginHandler} className="form" id="createAccount">
						<h2 className="form__title text-center">Login</h2>
						<div className="form__message form__message--error"></div>

						{/* email */}
						<div className="form__input-group form-group ">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input
								type="email"
								required
								id="checkEmail"
								name="email"
								ref={userRef}
								autoComplete="off"
								className="form__input input-group mb-3"
								value={email}
								placeholder="Enter Email "
								aria-invalid={validEmail ? "false" : "true"}
								aria-describedby="emailnote"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						{/* password */}
						<div className="form__input-group form-group">
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<input
								type="password"
								id="password"
								required
								name="password"
								className="form__input input-group mb-3"
								value={password}
								aria-invalid={validPassword ? "false" : "true"}
								aria-describedby="passwordnote"
								placeholder="Enter Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						{/* disabled={!validEmail || !validPassword ? true : false} */}
						<button
							disabled={!validEmail || !validPassword ? true : false}
							className="form__button"
							id="btn-loginSubmit">
							Login
						</button>

						<div className="form__text">
							<p>
								<Link className="form__link " to="/forgotpassword">
									Forgot Password?
								</Link>
							</p>
						</div>
						<div className="form__text">
							<p>Don't have an account?</p>
							<p>
								<Link className="form__link " to="/register">
									Create an account
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</body>
	);
};

export default LoginScreen;
