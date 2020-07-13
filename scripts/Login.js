'use strict';

class Login {
    constructor() {
        this.userInput = document.querySelector("#inputUserLogIn");
        this.passwordInput = document.querySelector("#inputPasswordLogIn");

        this.loginButton = document.querySelector("#login-button");
        this.messageContainer = document.querySelector(".message-container-login")
    }

    //Gestión del envío de datos (submit)

    submit = (event) => {
        event.preventDefault();

        const usersDB = db.getAllUsers();

        const name = this.userInput.value;
        const password = this.passwordInput.value;

        //Intento de buscar al usuario en el local storage
        const user = usersDB.find((userObj) => {
            if (userObj.name === name && userObj.password === password) {
                return true;
            }
        });

        this.showMessage(user);
    }

    showMessage = (user) => {
        this.messageContainer.innerHTML = "";

        const message = document.createElement("div");

        if (user) {
            message.classList.add("alert", "alert-success");
            message.innerHTML = `Welcome, ${user.name}!`
        } else {
            message.classList.add("alert", "alert-danger");
            message.innerHTML = `Woops, user and/or password invalid.`
        }

        this.messageContainer.appendChild(message);

        if (user) this.redirect();
    };

    redirect = () => {
        setTimeout(() => location.assign('index.html'), 4000);
    };
};

const login = new Login();

login.loginButton.addEventListener('click', login.submit);