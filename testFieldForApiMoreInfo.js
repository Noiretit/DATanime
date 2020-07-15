'use strict'

const urlParams = new URLSearchParams(window.location.search);
const animeId = urlParams.get('id');



function getDetailedAnimeInfo() {
    const animeSelectorContainer = document.querySelector("#animeSelector");
    const coverAnimeSelector = document.querySelector("#detailedCoverImage");
    fetch(`https://dat-anime-api.herokuapp.com/anime/${animeId}`)
        .then((response) => response.json())
        .then((animeData) => {
            const animeFullInfo = document.createElement("div");
            animeFullInfo.classList.add("container");
            animeFullInfo.innerHTML = `
            <div class="row">
                    <div id="coverContainer" class="col">
                        <img class="img-fluid" id="detailedImage"
                            src="https://media.kitsu.io/anime/poster_images/${animeId}/medium.jpg?1423580507">
                    </div>
                    <div class="col forms">
                        <div class="row">
                            <div class="col">
                                <h4 class="faq-headers pl-1">Title</h4>
                                <div class="faq text-light pt-3 px-4">
                                    <p>${animeData.attributes.canonicalTitle} - ${animeData.attributes.titles.ja_jp}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h4 class="faq-headers pl-1 pt-4">First & last episode</h4>
                                <div class="faq text-light pt-3 px-4">
                                    <p>${animeData.attributes.startDate} - ${animeData.attributes.endDate}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h4 class="faq-headers pl-1 pt-4">Genre</h4>
                                <div class="faq text-light pt-3 px-4">
                                    <p>Sci-fi, Psychological, Dementia, Mecha, Drama, Action</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h4 class="faq-headers pl-1 pt-4">Rating</h4>
                                <div class="faq text-light pt-3 px-4">
                                    <p>${animeData.attributes.averageRating}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h4 class="faq-headers pl-1 pt-4">Number of episodes</h4>
                                <div class="faq text-light pt-3 px-4">
                                    <p>${animeData.attributes.episodeCount}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h4 class="faq-headers pl-1 pt-4">Rating position</h4>
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
                                <h4 class="faq-headers pl-4">Synopsis</h4>
                                <div class="faq text-light pt-3 px-4">
                                    <p>${animeData.attributes.synopsis}</p>
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

*/