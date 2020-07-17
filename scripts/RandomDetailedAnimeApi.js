'use strict'



function getRandomDetailedAnime() {
    let randomAnimeId = Math.round(Math.floor((Math.random() * 400)));

    const animeSelectorContainer = document.querySelector("#animeSelector");
    const emoji = "⚪️ ";

    fetch(`https://dat-anime-api.herokuapp.com/anime/${randomAnimeId}`)
        .then((animeResponse) => animeResponse.json())
        .then((animeData) => {
            const titleForYoutubeSearch = animeData.attributes.canonicalTitle.split(' ').join('+');
            const animeFullInfo = document.createElement("div");
            animeFullInfo.classList.add("container");
            animeFullInfo.innerHTML = `
            <div class="row">
                    <div id="coverContainer" class="col-sm-7 my-2">
                        <img class="img-fluid" id="detailedImage"
                            src="https://media.kitsu.io/anime/poster_images/${randomAnimeId}/large.jpg?1423580507">
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
                </div>`;
            animeSelectorContainer.appendChild(animeFullInfo);
        })
        .catch((err) => {});
};

getRandomDetailedAnime();