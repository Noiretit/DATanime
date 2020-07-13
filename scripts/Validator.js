'use strict';

class Validator {
    constructor() {
        //Mensajes de errores
        this.invalidadEmailError = "Invalid email, try again!";
        this.emailExistsError = "Email already registered, woops";
        this.passwordError = "Password must be 6 characters long, sorry...";
        this.repeatPasswordError = "Passwords do not match!";

        //Objetos con los errores que vamos a mostrar al usuario
        this.errors = {
            invalidadEmailError: this.invalidadEmailError,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError
        }
    }

    //Validar nombre del email
    validateValidEmail = (email) => {
        //Comprueba si el email es válido según regex (en la función auxiliar "emailIsValid"). 
        if (this.emailIsValid(email)) { //Si es válido, quita el error del objeto this.errors
            delete this.errors.invalidadEmailError
        } else { //Si el email es inválido, se pone el mensaje de this.errors correspondiente
            this.errors.invalidadEmailError = this.invalidadEmailError
        }
    }

    //Función auxiliar de "validateValidEmail" /\
    emailIsValid = (email) => {
        //Statement con las reglas de sintaxis del email
        const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        //Método test() comprueba si el parámetro cumple las reglas (regex)
        //y devuelve true o false
        const isValid = emailRegEx.test(email);

        return isValid;
    };

    //Validar si el email no está registrado (que sea único)
    validateUniqueEmail = (newEmail) => {
        const usersDB = db.getAllUsers(); //Llamamos a la función de la database que nos da los usuarios registrados
        let emailUnique = true; //Damos por hecho de que el email es único

        if (usersDB.length > 0) { //Si hay usuarios...
            usersDB.forEach((usersObj) => {
                if (usersObj.email === newEmail) {
                    emailUnique = false //Si el email en la db es igual al nuevo, cambia el estado a false
                }
            })

            if (emailUnique) { //Si después de todo el email es único/true, quita el error
                delete this.errors.emailExistsError
            } else { //Si después de todo el email está registrado/false, muestra el error
                this.errors.emailExistsError = this.emailExistsError
            }
        }
    };

    //Validar que la password sea 6 letters long
    validatePassword = (password) => {
        if (password.length > 5) {
            delete this.errors.passwordError;
        } else {
            this.errors.passwordError = this.passwordError;
        }
    }

    //Validar si password y repeatPassword son iguales
    validatePasswordRepeat = (password, passwordRepeat) => {
        if (password === passwordRepeat) {
            delete this.errors.repeatPasswordError;
        } else {
            this.errors.repeatPasswordError = this.repeatPasswordError;
        }
    }

    //Muestra los errores
    getErrors = () => {
        return this.errors;
    }

    //Reinicia los errores mostrados para el próximo register
    resetValidatorErrors = () => {
        this.errors = {
            invalidadEmailError: this.invalidadEmailError,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError
        }
    }

}

const validator = new Validator();