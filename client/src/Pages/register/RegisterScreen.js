import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "../../api/axios";

import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// custom CSS
import "./RegisterScreen.css";

// *talvez importar regex de config file
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
// /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const RegisterScreen = () => {
	const usernameRef = useRef();
	const errRef = useRef();
	//
	const [username, setUsername] = useState("");
	const [validUsername, setValidUsername] = useState(false);
	const [usernameFocus, setUsernameFocus] = useState(false);
	//
	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);
	//
	const [password, setPassword] = useState("");
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);
	//
	const [confirmPassword, setConfirmPassword] = useState("");
	const [validConfirmPassword, setValidConfirmPassword] = useState(false);
	const [ConfirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
	//
	const [errMessage, setErrMessage] = useState("");

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from || "/home";
	// ! verificar
	// useEffect(() => {
	// 	if (localStorage.getItem("token")) {
	// 		navigate(from, { replace: true });
	// 	}
	// }, [from, navigate]);

	// ! //////////////

	useEffect(() => {
		usernameRef.current.focus();
	}, []);

	useEffect(() => {
		const result = USER_REGEX.test(username);

		setValidUsername(result);
	}, [username]);

	useEffect(() => {
		const result = EMAIL_REGEX.test(email);

		setValidEmail(result);
	}, [email]);

	useEffect(() => {
		const result = PASSWORD_REGEX.test(password);
		setValidPassword(result);

		setValidConfirmPassword(password === confirmPassword);
	}, [password, confirmPassword]);

	useEffect(() => {
		setErrMessage("");
	}, [username, email, password, confirmPassword]);

	const registerHandler = async (e) => {
		e.preventDefault();

		// if button enabled with js hack
		const v1 = USER_REGEX.test(username);
		const v2 = PASSWORD_REGEX.test(password);
		if (!v1 || !v2) {
			setErrMessage("Invalid Entry");
			return;
		}

		const config = {
			Header: {
				"content-type": "application/json",
				withCredentials: true,
			},
		};

		if (password !== confirmPassword) {
			setPassword("");
			setConfirmPassword("");
			setTimeout(() => {
				setErrMessage("");
			}, 5000);
			return setErrMessage("Password doesn't match");
		}

		try {
			const { data } = await axios.post(
				"/api/auth/register",
				{ username, email, password },
				config,
			);

			// clear state and controlled inputs
			setUsername("");
			setEmail("");
			setPassword("");
			setConfirmPassword("");

			console.log(data);

			localStorage.setItem("token", data.token);

			// ! verificar
			console.log("from : " + from);

			navigate(from, { replace: true });
			// ! /////////////////
		} catch (error) {
			if (!error?.response) {
				setErrMessage("No Server Response");
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
		<div className="body">
			<div className="register__container	">
				<div className="register__wrapper">
					<p ref={errRef} className={errMessage ? "errmessage" : "offscreen"} aria-live="assertive">
						{errMessage}
					</p>

					<form onSubmit={registerHandler} className="form" id="createAccount">
						<h2 className="register__form__title ">Create Account</h2>
						<div className="register__form__message register__form__message--error"></div>
						{/* username */}
						<div className="register__form__input-group register-form-group">
							<label htmlFor="username" className="form-label">
								Username
								<span className={validUsername ? "valid" : "hide"}>
									<FontAwesomeIcon className="mx-auto px-2" icon={faCheck} />
								</span>
								<span className={validUsername || !username ? "hide" : "invalid"}>
									<FontAwesomeIcon className="mx-auto px-2" icon={faTimes} />
								</span>
							</label>
							<input
								type="text"
								id="username"
								name="username"
								ref={usernameRef}
								required
								// accessibility
								aria-invalid={validUsername ? "false" : "true"}
								aria-describedby="uidnote"
								autoComplete="off"
								className="form__input"
								value={username}
								placeholder="Username"
								onChange={(e) => setUsername(e.target.value)}
								onFocus={() => setUsernameFocus(true)}
								onBlur={() => setUsernameFocus(false)}
							/>
							<p
								id="uidnote"
								className={
									usernameFocus && username && !validUsername ? "instructions" : "offscreen"
								}>
								<FontAwesomeIcon className="mx-auto px-2" icon={faInfoCircle} />
								4 to 25 characters.
								<br />
								Must begin with a letter.
								<br />
								Letters, numbers, underscores,hyphens allowed.
							</p>
							<div className="form__input-error-message"></div>
						</div>
						{/* email */}
						<div className="register__form__input-group register-form-group ">
							<label htmlFor="email" className="form-label">
								Email
								<span className={validEmail ? "valid" : "hide"}>
									<FontAwesomeIcon className="mx-auto px-2" icon={faCheck} />
								</span>
								<span className={validEmail || !email ? "hide" : "invalid"}>
									<FontAwesomeIcon className="mx-auto px-2" icon={faTimes} />
								</span>
							</label>
							<input
								type="email"
								required
								id="checkEmail"
								name="email"
								autoComplete="off"
								className="form__input"
								value={email}
								placeholder="Email Address"
								aria-invalid={validEmail ? "false" : "true"}
								aria-describedby="emailnote"
								onChange={(e) => setEmail(e.target.value)}
								onFocus={() => setEmailFocus(true)}
								onBlur={() => setEmailFocus(false)}
							/>
							<p
								id="emailnote"
								className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
								<FontAwesomeIcon className="mx-auto px-2 " icon={faInfoCircle} />
								Invalid Email (testar)
							</p>
							<div className="form__input-error-message"></div>
						</div>
						{/* password */}
						<div className="register__form__input-group register-form-group">
							<label htmlFor="password" className="form-label">
								Password
								<span className={validPassword ? "valid" : "hide"}>
									<FontAwesomeIcon className="mx-auto px-2" icon={faCheck} />
								</span>
								<span className={validPassword || !password ? "hide" : "invalid"}>
									<FontAwesomeIcon className="mx-auto px-2" icon={faTimes} />
								</span>
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
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
								onFocus={() => setPasswordFocus(true)}
								onBlur={() => setPasswordFocus(false)}
							/>
							<p
								id="paswwordnote"
								className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
								<FontAwesomeIcon className="mx-auto px-2" icon={faInfoCircle} />
								8 to 24 characters.
								<br />
								Must include uppercase and lowercase letters,
								<br />
								a number and a special character.
								<br />
								Allowed special characters: <span aria-label="exclamation mark">!</span>{" "}
								<span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>{" "}
								<span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
							</p>
							<div className="form__input-error-message"></div>
						</div>
						{/* confirmPassword */}
						<div className="register__form__input-group register-form-group">
							<label htmlFor="password" className="form-label">
								Confirm Password
								<span className={validConfirmPassword && confirmPassword ? "valid" : "hide"}>
									<FontAwesomeIcon icon={faCheck} className="mx-auto px-2" />
								</span>
								<span className={validConfirmPassword || !confirmPassword ? "hide" : "invalid"}>
									<FontAwesomeIcon icon={faTimes} className="mx-auto px-2" />
								</span>
							</label>
							<input
								type="password"
								id="confirmPassword"
								required
								name="confirmPassword"
								className="form__input input-group mb-3"
								value={confirmPassword}
								aria-invalid={validConfirmPassword ? "false" : "true"}
								aria-describedby="paswwordconfirmnote"
								placeholder="confirm Password"
								onChange={(e) => setConfirmPassword(e.target.value)}
								onFocus={() => setConfirmPasswordFocus(true)}
								onBlur={() => setConfirmPasswordFocus(false)}
							/>
							<p
								id="paswwordconfirmnote"
								className={
									ConfirmPasswordFocus && !validConfirmPassword ? "instructions" : "offscreen"
								}>
								<FontAwesomeIcon className="mx-auto px-2" icon={faInfoCircle} />
								Must match previous password
							</p>
							<div className="form__input-error-message"></div>
						</div>
						<button
							disabled={
								!validUsername || !validEmail || !validPassword || !validConfirmPassword
									? true
									: false
							}
							className="register__form__button"
							id="btn-registerSubmit">
							Register
						</button>
						<div className="register__form__message">
							{/* {{ #if message }}
						<h4 className="alert" style="background: rgb(238, 81, 81);">{{ message }}</h4>
						{{/if}} */}
						</div>

						<span className="form__text">
							Already have an account!
							<p>
								<Link className="form__link" to="/login">
									login
								</Link>
							</p>
						</span>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterScreen;
