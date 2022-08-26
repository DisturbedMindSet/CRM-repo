import { useState } from "react";
import axios from "axios";
import "./ForgotPasswordScreen.css";

const ForgotPasswordScreen = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const forgotPasswordHandler = async (e) => {
		e.preventDefault();

		const config = {
			header: {
				"Content-Type": "application/json",
			},
		};

		try {
			const { data } = await axios.post("/api/auth/forgotpassword", { email }, config);

			setSuccess(data.data);
		} catch (error) {
			setError(error.response.data.error);
			setEmail("");
			setTimeout(() => {
				setError("");
			}, 5000);
		}
	};

	// return (
	// 	<div className="forgotpassword-screen">
	// 		<form onSubmit={forgotPasswordHandler} className="forgotpassword-screen__form">
	// 			<h3 className="forgotpassword-screen__title">Forgot Password</h3>
	// 			{error && <span className="error-message">{error}</span>}
	// 			{success && <span className="success-message">{success}</span>}
	// 			<div className="form-group">
	// 				<p className="forgotpassword-screen__subtext">
	// 					Please enter the email address you register your account with. We will send you reset
	// 					password confirmation to this email
	// 				</p>
	// 				<label htmlFor="email">Email:</label>
	// 				<input
	// 					type="email"
	// 					required
	// 					id="email"
	// 					placeholder="Email address"
	// 					value={email}
	// 					onChange={(e) => setEmail(e.target.value)}
	// 				/>
	// 			</div>
	// 			<button type="submit" className="btn btn-primary">
	// 				Send Email
	// 			</button>
	// 		</form>
	// 	</div>
	// );

	return (
		<section className="body">
			<div className="forgotpassword-screen">
				<div className="wrapper">
					<form onSubmit={forgotPasswordHandler} className="form">
						<h2 className="form__title text-center">Forgot Password</h2>
						{error && <span className="error-message">{error}</span>}
						{success && <span className="success-message">{success}</span>}
						<div className="form__input-group form-group ">
							<p className="forgotpassword-screen__subtext">
								Please enter the email address you register your account with. We will send you
								reset password confirmation to this email
							</p>
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input
								type="email"
								required
								name="email"
								className="form__input input-group mb-3"
								value={email}
								placeholder="Enter Email "
								aria-describedby="emailnote"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<button
							className="d-flex justify-content-center mx-auto btn btn-primary btn-block btn-lg "
							type="submit">
							Send Email
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ForgotPasswordScreen;
