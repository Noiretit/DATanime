'use strict'

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

/*
En vez de crear una función, creamos una clase
//Creación de un nuevo objeto (nueva instancia) para cada usuario
//con una función auxiliar (fucnión dentro de función)
function createUser(user, email, password) {
    const userObj = {
        user, //user: user, Si la key-value es igual, se puede escribir una vez ya que JS lo hace automatico
        email, //email: email,
        password, //password: password
    }
    return userObj;
}
*/