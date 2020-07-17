'use strict'

function getRandomIds() {
    const result = [];
    for (let i = 0; i < 10; i++) {
        let randomAnimeId = Math.round(Math.floor((Math.random() * 400)));
        result.push(randomAnimeId);
    }
    return result;
}

function getAnimes() {
    const section = document.querySelector("#listResult");

    const ids = getRandomIds();

    for (let i = 0; i < 11; i++) {
        fetch(`https://dat-anime-api.herokuapp.com/anime/${ids[i]}`)
            .then((animeResponse) => animeResponse.json())
            .then((animeData) => {
                const animeCard = document.createElement("div");
                animeCard.classList.add("card", "navy-border", "img-hover-zoom");
                animeCard.innerHTML = `
                <img class="card-img-top" src="${animeData.attributes.posterImage.large}" alt="${animeData.attributes.slug}-cover-image">
                    <div class="card-body">
                        <h5 class="card-title pb-1"><u>${animeData.attributes.canonicalTitle}</u></h5>
                        <p class="card-text">⭐️ <span class="bold-itoya">Score:</span> ${animeData.attributes.averageRating} over 100.</p>
                        <p class="card-text">🟢 <span class="bold-itoya">First aired in:</span> ${animeData.attributes.startDate}</p>
                        <p class="card-text">⚪️ <span class="bold-itoya">Finished in:</span> ${animeData.attributes.endDate ? animeData.attributes.endDate : "Still on air!"}</p>
                        <div class="see-more-center"> 
                            <a target="_blank" href="/DATanime/detailedresult.html?id=${animeData.id}" class="btn list-button">See more...</a>
                        </div>
                    </div>`;

                section.appendChild(animeCard)
            })
            .catch((err) => {});
    };
}

getAnimes();



/*let animeApi = "https://anime-movies-api.herokuapp.com/anime";

let animeArray, anime;

let randomAnime = Math.round(Math.floor((Math.random() * 400)));

const connectToApi = () => {
    fetch(animeApi)
        .then(animeResponse => animeResponse.json())
        .then(animeData => animeArray = animeData.results)
        .then(animeArrayData => anime = animeArrayData[randomAnime])
        .then(getElement => document.querySelector("#listResult").innerHTML = `
        <div class="card border-dark" style="width: 18rem;">
                <img class="card-img-top" src="${anime.attributes.coverImage.small}" alt="">
                <div class="card-body">
                    <h5 class="card-title pb-3"></h5>
                    <p class="card-text"></p>
                    <p class="card-text"></p>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">See more...</a>
                </div>
            </div>`)
        .catch(function (error) {
            return error;
        });
};

console.log(animeData);
*/
/*let animeArray = [];


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
*/
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