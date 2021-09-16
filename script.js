const results = document.getElementById('results');
const search_form = document.getElementById('search-form');
const search = document.getElementById('search');

search_form.addEventListener('submit', (e) => {
    e.preventDefault();

    let searchTerm = search.value;
    let API_URL =  `https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image`;

    getMovies(API_URL);
})

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.collection);
    })
}

function showMovies(data){

    results.innerHTML = '';
    let images = data.items;

    for(let i = 0; i < images.length; i++){
        const result = document.createElement('div');
        result.classList.add('results-item');
        result.innerHTML =
            `<img src="${images[i].links[0].href}" alt="">

                 <div class="description">
                     <h3>Description</h3>
                     ${images[i].data[0].description}    
                 </div>`;

        results.appendChild(result);
    }
}