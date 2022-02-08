getData();
const IMG_URL = 'https://image.tmdb.org/t/p/w200';
async function getData() {

    const response = await fetch('/movie');
    const data = await response.json();
    const container = document.createElement("div");
    container.setAttribute('id', 'container');
    document.body.appendChild(container);

    data.results.forEach(movie => {
        const img = document.createElement('img');
        img.src = `${IMG_URL}${movie.poster_path}`;
        container.appendChild(img);

    });
}

document.getElementById('butao').addEventListener('click', async () => {
    const textsearch = document.querySelector('input').value;
    const inputData = {
        textsearch
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputData)
    }
    const response = await fetch('/findmovie', options);
    const data = await response.json();
    console.log(data);
    container.innerHTML = '';
    data.results.forEach(movie => {
        const img = document.createElement('img');
        img.src = `${IMG_URL}${movie.poster_path}`;
        container.appendChild(img);
    })
})