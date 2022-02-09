getData();
const IMG_URL = 'https://image.tmdb.org/t/p/w200';
async function getData() {

        const response = await fetch('/movie');
        const data = await response.json();
        const container = document.createElement("div");
        container.setAttribute('id', 'container');
        document.body.appendChild(container);
        data.results.forEach(movie => {
                const movie_box = document.createElement('div');
                movie_box.setAttribute('class', 'movie_box');
                const img = document.createElement('img');
                img.setAttribute('id', movie.id);
                img.src = `${IMG_URL}${movie.poster_path}`;
                movie_box.appendChild(img);
                container.appendChild(movie_box);

                const imgs = document.querySelectorAll('img');

                imgs.forEach(img => {
                    img.addEventListener('click', async () => {
                        const imgId = img.getAttribute('id');
                        if (movie.id == imgId) {
                            container.innerHTML = '';
                            console.log('achou');
                            console.log(movie.id);
                            
                            const movie_poster = movie.poster_path;
                            const movie_overview = document.createElement('p');
                            const imgPoster = document.createElement('img');
                            imgPoster.src = `${IMG_URL}${movie_poster}`;
                            container.appendChild(imgPoster);
                            container.appendChild(movie_overview);
                            movie_overview.textContent = movie.overview;

                        };

                    });
                });
            })
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