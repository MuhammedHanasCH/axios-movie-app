import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'; 

const MovieList = () => {
  const API_KEY = 'b0c2c2c9';  
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=superman`;  

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log(response.data);  
  
        if (response.data && response.data.Search) {
          setMovies(response.data.Search);  
        } else {
          console.error("No movies found.");
          setMovies([]);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
  
    fetchMovies();
  }, []); 
  

  if (loading) {
    return <div>Loading...</div>;  
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />  
      ))}
    </div>
  );
};

export default MovieList;
