import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1> Actors Page</h1>
      {actors.map((a, index) => (
        <div key={index}>
          <h3>{a.name}</h3>
          <ul>
            {a.movies.map((m, index) =>(
              <li key={index}>{m}</li>
            ))}
          </ul>
          </div>
      ))}
    </div>
  );
};

export default Actors;
