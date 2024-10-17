const API_KEY = '69350d1235f3a8064625a2cc71a97b36'; 
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const searchMovies = async () => {
    const searchTerm = document.getElementById('search').value;
    if (searchTerm) {
        try {
            const response = await fetch(`${API_URL}${searchTerm}`);
            const data = await response.json();
            displayMovies(data.results);
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("Something went wrong while fetching data. Please try again.");
        }
    } else {
        alert("Please enter a search term");
    }
};

const displayMovies = (movies) => {
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = '';

    if (movies && movies.length > 0) {
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'placeholder.jpg'}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>Release Date: ${movie.release_date}</p>
                <p>Rating: ${movie.vote_average}</p>
            `;
            moviesContainer.appendChild(movieElement);
        });
    } else {
        moviesContainer.innerHTML = '<p>No movies found</p>';
    }
};
