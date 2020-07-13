fetch("https://kitsu.io/api/edge/anime")
    .then(res => res.json())
    .then(data => console.log(data));