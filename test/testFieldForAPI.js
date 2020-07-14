'use strict'

let animeArray = [];


fetch("https://kitsu.io/api/edge/anime?page[limit]=20&filter[averageRating]=80..")
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < 20; i++) {
            animeArray.push(data.data[i])
        }
        let count = 20;
        for (let i = 0; i < 30; i++) {
            fetch(`https://kitsu.io/api/edge/anime?filter%5BaverageRating%5D=80..&page%5Blimit%5D=10&page%5Boffset%5D=${count}`)
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < 20; i++) {
                        animeArray.push(data.data[i])
                    }
                    count += 10;
                })
        }
    })
    .catch


for (let i = 0; i < animeArray.length; i++) {
    console.log("Hola")
}

console.log(animeArray)

/* Da el nombre de los animes
fetch("https://kitsu.io/api/edge/anime?filter[averageRating]=80..")
    .then(res => res.json())
    .then(data => data.data.forEach(anime => {
        console.log(anime.attributes.canonicalTitle)
    }))
*/


//Animes con nota >=80
//Pasamos por un filtro del año seleccionado en el form, así que acorta la lista
//Pasamos un filtro del género seleccionado en el form (los géneros del anime están dentro de un link, por lo que una posible solución de Ari es
// crear un fetch anidado dentro del fetch)
//Ordenamos el resultado de mayor a menor nota
//Nos quedamos con los 10 primeros
//Volcamos, en listresult.html con:
/*
img = data\[posición]\attributes\posterImage\tiny
title = data\[posición]\attributes\canonicalTitle
year = (From the form)
genre = (From the form)
*/