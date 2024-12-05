// I did the tasks and repated some base code for each task for the next so i wouldn't be confused

// Task 1
import React, { useState } from 'react';

const MoviesList = () => {
  const [movies, setMovies] = useState([
    'The Shawshank Redemption',
    'The Godfather',
    'The Dark Knight',
    'Pulp Fiction',
    'Schindler\'s List'
  ]);

  return (
    <div>
      <h2>Favorite Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

// Task 2
import React, { useState } from 'react';

const MoviesList = () => {
  const [movies, setMovies] = useState([
    { title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', showDetails: false },
    { title: 'The Godfather', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', showDetails: false },
    { title: 'The Dark Knight', description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', showDetails: false },
    { title: 'Pulp Fiction', description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', showDetails: false },
    { title: 'Schindler\'s List', description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.', showDetails: false }
  ]);

  const toggleDetails = (index) => {
    setMovies(prevMovies => {
      const newMovies = [...prevMovies];
      newMovies[index].showDetails = !newMovies[index].showDetails;
      return newMovies;
    });
  };

  return (
    <div>
      <h2>Favorite Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <span onClick={() => toggleDetails(index)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
              {movie.title}
            </span>
            {movie.showDetails && (
              <p>{movie.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Task 3
import React, { useState } from 'react';

const MoviesList = () => {
  const [movies, setMovies] = useState([
    { title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', showDetails: false },
    { title: 'The Godfather', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', showDetails: false },
    { title: 'The Dark Knight', description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', showDetails: false },
    { title: 'Pulp Fiction', description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', showDetails: false },
    { title: 'Schindler\'s List', description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.', showDetails: false }
  ]);

  const toggleDetails = (index) => {
    setMovies(prevMovies => {
      const newMovies = [...prevMovies];
      newMovies[index].showDetails = !newMovies[index].showDetails;
      return newMovies;
    });
  };

  const removeMovie = (index) => {
    setMovies(prevMovies => prevMovies.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Favorite Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <span onClick={() => toggleDetails(index)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
              {movie.title}
            </span>
            {movie.showDetails && (
              <p>{movie.description}</p>
            )}
            <button onClick={() => removeMovie(index)} style={{ marginLeft: '10px' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Task 4
import React, { useState } from 'react';

const MovieList = () => {
  const movies = [
    { id: 1, title: 'Movie A', genre: 'Action' },
    { id: 2, title: 'Movie B', genre: 'Drama' },
    { id: 3, title: 'Movie C', genre: 'Action' },
    { id: 4, title: 'Movie D', genre: 'Comedy' },
  ];

  const [showAll, setShowAll] = useState(true);

  const toggleView = () => {
    setShowAll(!showAll);
  };

  const renderedMovies = showAll ? movies : movies.filter(movie => movie.genre === 'Action');

  return (
    <div>
      <button onClick={toggleView}>
        {showAll ? 'Show Action Movies' : 'Show All Movies'}
      </button>

      <ul>
        {renderedMovies.map(movie => (
          <li key={movie.id}>
            {movie.title} ({movie.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList; MovieList;