'use strict'

const urlParams = new URLSearchParams(window.location.search);
const animeId = urlParams.get('id');

console.log(animeId); //106

function getDetailedAnimeInfo() {
    fetch(`https://kitsu.io/api/edge/anime/${animeId}`)
        .then((animeResponse) => animeResponse.json())
        .then((animeData) => {

        })
}

getDetailedAnimeInfo();

//Poner dentro de la función