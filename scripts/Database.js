'use strict'

class Database {
    getAllUsers = () => { //Método para recuperar los usuarios
        const usersStr = localStorage.getItem("users"); //Conseguimos los users en strings
        const usersArr = JSON.parse(usersStr) //Convertimos los users a un array de objetos

        if (usersArr === null) { //Si aún no hay usuarios, devuelve un array vacío
            return [];
        } else {
            return usersArr;
        };
    }


    saveNewUser = (newUser) => { //Método para almacenar datos en local storage
        //Recuperar el array de los usuarios del localStorage (o vacío)
        const usersArr = this.getAllUsers();

        //Empujamos el nuevo user al array
        usersArr.push(newUser);

        //Convertir el array en un string
        const usersStr = JSON.stringify(usersArr);

        //Guardar de nuevo en el local storage
        localStorage.setItem("users", usersStr);
    }
};

//Creamos la instancia
const db = new Database();