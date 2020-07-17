'use strict'

const urlParams = new URLSearchParams(window.location.search);
const animeId = urlParams.get('id');

function getDetailedAnimeInfo() {
    const animeSelectorContainer = document.querySelector("#animeSelector");

    const emoji = "⚪️ ";

    const coverAnimeSelector = document.querySelector("#detailedCoverImage");

    fetch(`https://dat-anime-api.herokuapp.com/anime/${animeId}`)
        .then((response) => response.json())
        .then((animeData) => {
            const titleForYoutubeSearch = animeData.attributes.canonicalTitle.split(' ').join('+');
            const animeFullInfo = document.createElement("div");
            animeFullInfo.classList.add("container");
            animeFullInfo.innerHTML = `
            <div class="row">
                    <div id="coverContainer" class="col-sm-7 my-2">
                        <img class="img-fluid" id="detailedImage"
                            src="https://media.kitsu.io/anime/poster_images/${animeId}/large.jpg?1423580507">
                    </div>
                    <div class="col-sm-5 forms">
                        <div class="row">
                            <div class="col">
                                <h4 class="faq-headers pl-1 bold-itoya">Title</h4>
                                <div class="faq text-light pt-3 px-4">
                                    <p>🇬🇧 ${animeData.attributes.canonicalTitle}</p>
                                    <p>🇯🇵 ${animeData.attributes.titles.ja_jp}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h4 class="faq-headers pl-1 pt-4 bold-itoya">First & last episode</h4>
                                <div class="faq text-light pt-3 px-4">
                                    <p>🟢 ${animeData.attributes.startDate} --- ${animeData.attributes.endDate ? emoji + animeData.attributes.endDate : " 🤘🏻 Still on air! Wohooo!"} </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h4 class="faq-headers pl-1 pt-4 bold-itoya">Youtube opening</h4>
                                <div class="faq text-light pt-3 px-4">
                                    <p><a target="_blank" href="https://www.youtube.com/results?search_query=${titleForYoutubeSearch}+Opening" class="btn btn-outline-warning">${animeData.attributes.canonicalTitle}'s intro scene</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h4 class="faq-headers pl-1 pt-4 bold-itoya">Rating</h4>
                                <div class="faq text-light pt-3 px-4">
                                    <p>⭐️ ${animeData.attributes.averageRating} ⭐️</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h4 class="faq-headers pl-1 pt-4 bold-itoya">Number of episodes</h4>
                                <div class="faq text-light pt-3 px-4">
                                    <p>${animeData.attributes.episodeCount ? animeData.attributes.episodeCount : "IDK, I only count when it's finished 🤷🏻‍♂️"}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h4 class="faq-headers pl-1 pt-4 bold-itoya">Rating position</h4>
                                <div class="faq text-light pt-3 px-4">
                                    <p>${animeData.attributes.ratingRank}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div id="synopsis" class="col forms">
                        <div class="row">
                            <div class="col">
                                <h4 class="faq-headers pl-4 bold-itoya">Synopsis</h4>
                                <div class="faq text-light pt-3 px-4">
                                    <p>${animeData.attributes.synopsis}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            animeSelectorContainer.appendChild(animeFullInfo);
        })
        .catch((err) => {});
};

getDetailedAnimeInfo();

/* JAVASCRIPT FOR COVER
.then((animeData) => {
            cont coverAnime = document.createElement("img");
            coverAnime.innerHTML = `
            <img  class="img-fluid"
                    src="https://media.kitsu.io/anime/cover_images/22/large.jpg?1519178933">
            `
        })
*/

/* HTML FOR COVER
<div class="row">
                <!--Imagen cover large (API) del anime seleccionado desde listresult.js-->
                <!--cada imagen sigue el patrón-->
                <!--media.kitsu.io/anime/cover_images/IDDELANIME/large.jpg-->
                <!--img-fluid para que quede como banner-->
                <img id="detailedCoverImage" class="img-fluid"
                    src="https://media.kitsu.io/anime/cover_images/1/large.jpg?1519178801">
            </div>
*/