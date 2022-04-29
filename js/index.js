// count/highlight class that are repeated.

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

function clearInputError(inputElement) {
	inputElement.classList.remove("form__input--error");
	inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

function validation(Username, Password) {
	// validate

	for (let i = 0; i < users.length; i++) {
		if (Username.value == users[i].username && Password.value == users[i].password) {
			console.log(Username.value + " is logged in!!");
			self.location = "user.html";
		}
	}
	console.log("username doesn't exist");
}

document.addEventListener("DOMContentLoaded", () => {
	const loginForm = document.querySelector("#login");
	const createAccountForm = document.querySelector("#createAccount");
	const forgotPassForm = document.querySelector("#forgotPass");

	document.querySelector("#linkCreateAccount").addEventListener("click", e => {
		e.preventDefault();
		loginForm.classList.add("form--hidden");
		createAccountForm.classList.remove("form--hidden");
		console.log("true r");
	});

	document.querySelector("#linkLogin").addEventListener("click", e => {
		e.preventDefault();
		loginForm.classList.remove("form--hidden");
		createAccountForm.classList.add("form--hidden");
		console.log("true login");
	});

	document.querySelector("#linkForgotPass").addEventListener("click", e => {
		e.preventDefault();
		forgotPassForm.classList.remove("form--hidden");
		loginForm.classList.add("form--hidden");
		console.log("true inside forgotPass");
	});

	document.querySelector("#linkReturn").addEventListener("click", e => {
		e.preventDefault();
		loginForm.classList.remove("form--hidden");
		forgotPassForm.classList.add("form--hidden");
		console.log("true return to login");
	});

	loginForm.addEventListener("submit", e => {
		e.preventDefault();
		var username = document.querySelector(`input[name$="email"]`);
		var password = document.querySelector(`input[name$="pass"]`);

		// perform ajax/fetch login
		validation(username, password);
		setFormMessage(loginForm, "error", "invalid username/password combination");
	});

	document.querySelectorAll(".form__input").forEach(inputElement => {
		inputElement.addEventListener("blur", e => {
			if (
				e.target.id === "signupUsername" &&
				e.target.value.length > 0 &&
				e.target.value.length < 10
			) {
				setInputError(inputElement, "username must be 10 characters in length");
			}
		});

		inputElement.addEventListener("input", e => {
			clearInputError(inputElement);
		});
	});
});
