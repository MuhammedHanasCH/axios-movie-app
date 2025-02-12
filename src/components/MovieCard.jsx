import React from 'react';

const MovieCard = ({ movie }) => {

  return (
    <div className="movie-card" style={{ margin: '20px', border: '1px solid #ddd', borderRadius: '5px', padding: '10px', width: '200px' }}>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '100%', borderRadius: '5px' }} />
      <h4>{movie.Title}</h4>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
