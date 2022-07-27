// count/highlight class that are repeated.

// const { json } = require("body-parser");
// const { request } = require("http");

function setFormMessage(formElement, type, message) {
	const messageElement = formElement.querySelector(".form__message");

	messageElement.textContent = message;
	messageElement.classList.remove("form__message--success", "form__message--error");
	messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
	inputElement.classList.add("form__input--error");
	inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function setInputSuccess(inputElement, message) {
	inputElement.classList.add("form__input--success");
	inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
	inputElement.classList.remove("form__input--error");
	inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

function validarEmail(input) {
	let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
	if (input.value.match(regex)) {
		console.log("deu ");
	} else {
		let message = "Invalid Email";
		setInputError(input, message);
	}
}

function validarPassword(input) {
	let regExpWeak = /[a-z]/;
	let regExpMedium = /\d+/;
	let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
	let min_week_password = 3;
	let min_medium_password = 6;
	let min_strong_password = 6;

	let input_week = input.value.match(regExpWeak);
	let input_medium = input.value.match(regExpMedium);
	let input_strong = input.value.match(regExpStrong);
	if (input.value) {
		if (input.value.length <= min_week_password && (input_week || input_medium || input_strong)) {
			return "Your password is too week";
		}
		if (
			input.value.length >= min_medium_password &&
			((input_week && input_medium) ||
				(input_medium && input_strong) ||
				(input_week && input_strong))
		) {
			return "Your password is medium";
		}
		if (input.value.length >= min_strong_password && input_week && input_medium && input_strong) {
			return "Your password is strong";
		}
	}
}

function comparePass(input) {
	var pass = document.querySelector(`input[name$="password"]`);

	if (pass.value == input) {
		message = "Password Match";

		// clearInputError(cnfPass)
	} else {
	}
}

function validation(Username, Password) {
	// validate
	console.log("login");
	for (let i = 0; i < users.length; i++) {
		if (Username.value == users[i].username && Password.value == users[i].password) {
			console.log(Username.value + " is logged in!!");
			self.location = "../view/user.html";
		}
	}
	console.log("username doesn't exist");
}

function replaceUrl(data) {
	location.hash = "";

	if (data.href == location.href + "register") {
		history.replaceState("", "", data.href);
	} else {
		history.replaceState("", "", data.href);
	}
	console.log(location.href);

	if (data.href == location.href + "login") {
		history.replaceState("", "", data.href);
	} else {
		history.replaceState("", "", data.href);
	}
	if (data.href == location.href + "user") {
		history.replaceState("", "", data.href);
	} else {
		history.replaceState("", "", data.href);
	}
}

function doRegister(ev) {
	let name = document.querySelector(`input[name$="name"]`);
	let em = document.querySelector(`input[name$="email"]`);
	let pass = document.querySelector(`input[name$="password"]`);
	let passConf = document.querySelector(`input[name$="passwordConfirm"]`);

	let user = {
		name: name,
		email: em,
		password: pass,
		passwordConfirm: passConf,
	};

	let endpoint = "auth/register";
	sendData(user, endpoint, registerSuccess);
}

function doLogin(ev) {}

function sendData(user, endpoint, callback) {
	let url = `http://localhost:4000/${endPoint}`;
	let h = new Headers();
	h.append("Content-Type", "application/json");
	let req = new request(url, {
		method: "Post",
		headers: h,
		body: JSON.stringify(user),
	});
	fetch(req)
		.then(res => res.json)
		.then(content => {
			if ("error" in content) {
				failure(content.error);
			}
			if ("data" in content) {
				callback(content.data);
			}
		})
		.catch(failure);
}

function registerSuccess(data) {
	// user has been registered
	console.log("new user created", data);
	alert("you have been registered!! ");
}

document.addEventListener("DOMContentLoaded", () => {
	const loginForm = document.querySelector("#login");
	const createAccountForm = document.querySelector("#createAccount");
	const forgotPassForm = document.querySelector("#forgotPass");
	const clearMessage = document.querySelector(".clean");
	const loginSubmit = document.querySelector("#btn-loginSubmit");
	const registerSubmit = document.querySelector("#btn-registerSubmit");

	loginSubmit.addEventListener("click", doLogin);
	// registerSubmit.addEventListener("click", doRegister);

	// clearMessage.addEventListener("load", e => {
	// 	setTimeout(function () {
	// 		e.target.classList.add("hidden");
	// 	}, 2000);
	// });
	console.log(clearMessage);

	// document.querySelector("#linkCreateAccount").addEventListener("click", e => {
	// 	setFormMessage(loginForm, "error", "");

	// 	replaceUrl(e.target);
	// });

	// document.querySelector("#linkLogin").addEventListener("click", e => {
	// 	e.preventDefault();
	// 	replaceUrl(e.target);
	// });

	const linkForgotPass = document.querySelector("#linkForgotPass");

	if (linkForgotPass) {
		linkForgotPass.addEventListener("click", e => {
			e.preventDefault();
			loginForm.classList.add("form--hidden");
			forgotPassForm.classList.remove("form--hidden");

			setFormMessage(loginForm, "error", "");
		});
	}

	const linkReturn = document.querySelector("#linkReturn");

	if (linkReturn) {
		linkReturn.addEventListener("click", e => {
			e.preventDefault();
			loginForm.classList.remove("form--hidden");
			forgotPassForm.classList.add("form--hidden");
			replaceUrl(e.target);
		});
	}

	// loginForm.addEventListener("submit", e => {
	// 	e.preventDefault();
	// 	var username = document.querySelector(`input[name$="email"]`);
	// 	var password = document.querySelector(`input[name$="pass"]`);

	// 	// perform ajax/fetch login
	// 	validation(username, password);
	// 	setFormMessage(loginForm, "error", "invalid username/password combination");
	// });

	document.querySelectorAll(".form__input").forEach(inputElement => {
		inputElement.addEventListener("blur", e => {
			if (
				e.target.id === "signupUsername" &&
				e.target.value.length > 0 &&
				e.target.value.length < 5
			) {
				setInputError(inputElement, "username must be 5 characters in length");
			}
		});

		// document.querySelector("#checkEmail").addEventListener("blur", e => {
		// 	console.log(e.target.value);
		// 	validarEmail(e.target);
		// });
		inputElement.addEventListener("blur", e => {
			if (e.target.id === "inputPass") {
				setInputError(inputElement, validarPassword(inputElement));

				// setTimeout(setInputError,3000,inputElement,validarPassword(inputElement))
				setTimeout(() => {
					clearInputError(inputElement);
				}, 2500);
				// verificar se deve ter timeout de mensagem ---fraca/media/forte
			}
		});

		inputElement.addEventListener("blur", e => {
			if ((e.target.id = "checkPass")) {
				comparePass(e.target.value);
			}
		});

		inputElement.addEventListener("input", e => {
			clearInputError(inputElement);
		});
	});
});
