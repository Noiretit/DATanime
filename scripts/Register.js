'use strict'

class Register {
    constructor() {
        this.userInput = document.querySelector("#inputUser");
        this.emailInput = document.querySelector("#inputEmail");
        this.passwordInput = document.querySelector("#inputPassword");
        this.repeatPasswordInput = document.querySelector("#inputRepeatPassword");

        this.buttonInput = document.querySelector("#register-button");
        this.errorsWrapper = document.querySelector(".message-container-register");
    }

    //Gestionar cambios del input "email"
    handleEmailInput = (event) => {
        const email = event.target.value;

        //Validar el texto del input email
        validator.validateValidEmail(email);

        const errors = validator.getErrors(); //Almacena el listado de errores de Validator.js linea 12

        //Si no hay errores...
        if (!errors.invalidadEmailError) {
            //compriueba si el email es único
            validator.validateUniqueEmail(email);
        };

        this.setErrorMessages();

        this.checkButton();
    };

    //Gestionar cambios del input "password"
    handlePasswordInput = (event) => {
        const password = event.target.value;
        const passwordRepeat = this.repeatPasswordInput.value;

        //Validar el texto del input password
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);

        this.setErrorMessages();

        this.checkButton();
    };

    //Gestionar cambios del input "repeat-password"
    handleRepeatPasswordInput = (event) => {
        const passwordRepeat = event.target.value;
        const password = this.passwordInput.value;

        //Validar el texto del input password y repeatPassword
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);

        this.setErrorMessages();

        this.checkButton();
    };

    //Gestionar envío de los datos (submit)
    saveData = (event) => {
        //Cancela la recarga de la página por el type="submit" del botón de registro
        event.preventDefault();
        //Recoger valores de cada input una vez se haga click en submit
        const user = this.userInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const repeatPassword = this.repeatPasswordInput.value;


        //Crea una nueva instancia (objeto) que hay en el User.js
        const newUser = new User(user, email, password);

        //Guarda el nuevo user en la base de datos ficticia
        db.saveNewUser(newUser);

        //Una vez se haya creado el usuario, se vacía el formulario
        this.userInput.value = "";
        this.emailInput.value = "";
        this.passwordInput.value = "";
        this.repeatPasswordInput.value = "";

        this.showSuccessMessage();
        this.removeMessages();

        //Reinicia los errores del validator
        validator.resetValidator();
        //Desactiva el botón register de nuevo
        this.buttonInput.disabled = true;
    };

    //Función auxiliar para registrar funciones de cada input
    addListeners = () => {
        //Escucha los cambios en los campos, y llama a la función que le toca
        this.emailInput.addEventListener("input", this.handleEmailInput);
        this.passwordInput.addEventListener("input", this.handlePasswordInput);
        this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);
        this.buttonInput.addEventListener("click", this.saveData);
    };

    showSuccessMessage = () => {
        // vacia los errores para que no se sumen
        this.errorsWrapper.innerHTML = "";

        const errorsObj = validator.getErrors();
        // convertir el objeto a un array de strings
        const errorsStringsArr = Object.values(errorsObj);

        if (errorsStringsArr.length > 1) {
            return;
        }

        const successMessageP = document.createElement('div');
        successMessageP.classList.add("alert", "alert-success")
        successMessageP.innerHTML = "Your account has been created! Yay!";

        this.errorsWrapper.appendChild(successMessageP);

    }

    //Activa o desactiva la propiedad del botón de register dependiendo de si hay errores o no.
    checkButton = () => {
        const errorsObj = validator.getErrors();
        const errorsArr = Object.values(errorsObj);

        if (errorsArr.length > 0) {
            this.buttonInput.disabled = true;
        } else {
            this.buttonInput.disabled = false;
        }
    }

    removeMessages = () => {
        setTimeout(() => {
            this.errorsWrapper.innerHTML = "";
        }, 4000)
    };

    //Mostrar los mensajes que vienen desde el Validator.js /errors
    setErrorMessages = () => {
        //Vacía el message-container del HTML (targeteado por errorsWrapper)
        //para que no se acumulen
        this.errorsWrapper.innerHTML = "";

        //Almacenamos el acceso de los errores en una variable
        const errorsObj = validator.getErrors();

        //Convertimos el objeto de errores en un array para iterar
        const errorsStringArr = Object.values(errorsObj);

        errorsStringArr.forEach((errorStr) => {
            const errorMessageContainer = document.createElement("div");
            errorMessageContainer.classList.add("alert", "alert-danger")
            errorMessageContainer.innerHTML = errorStr;

            this.errorsWrapper.appendChild(errorMessageContainer);
        })
    }
}
//Nueva instancia
const register = new Register();

//Una vez carga la página, llamada a la función de addListeners (para que no de undefined cuando los campos estén vacíos)
window.addEventListener("load", register.addListeners);