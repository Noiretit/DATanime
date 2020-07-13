'use strict'

class Register {
    constructor() {
        this.userInput = document.querySelector("#inputUser");
        this.emailInput = document.querySelector("#inputEmail");
        this.passwordInput = document.querySelector("#inputPassword");
        this.repeatPasswordInput = document.querySelector("#inputRepeatPassword");

        this.buttonInput = document.querySelector("#register-button");
        this.errorsWrapper = document.querySelector(".message-container");
    }

    //Gestionar cambios del input "email"
    handleEmailInput = (event) => {
        const email = event.target.value;

        //Validar el texto del input email
    };

    //Gestionar cambios del input "password"
    handlePasswordInput = (event) => {
        const password = event.target.value;

        //Validar el texto del input password
    };

    //Gestionar cambios del input "repeat-password"
    handleRepeatPasswordInput = (event) => {
        const repeatPassword = event.target.value;

        //Validar el texto del input repeatPassword
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
    };

    //Función auxiliar para registrar funciones de cada input
    addListeners = () => {
        //Escucha los cambios en los campos, y llama a la función que le toca
        this.emailInput.addEventListener("input", this.handleEmailInput);
        this.passwordInput.addEventListener("input", this.handlePasswordInput);
        this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);
        this.buttonInput.addEventListener("click", this.saveData);
    };
}
//Nueva instancia
const register = new Register();

//Una vez carga la página, llamada a la función de addListeners (para que no de undefined cuando los campos estén vacíos)
window.addEventListener("load", register.addListeners);