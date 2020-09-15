import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((m, index) => (
          <div key={index}>
            <h3>{m.title}</h3>
            <p>{m.time}</p>
              <p>Genres:</p>
              <ul>
                {m.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            
          </div>
        ))}
        </div>
)};

export default Movies;
