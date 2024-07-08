import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/api.js';
import '../styles/MovieDetails.css'



const MovieDetail = () => {


  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };

    fetchDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail">
     
     <div>
     <h1>{movie.Title}</h1>
    <h3 >{movie.Plot}</h3>
      <ul>
        <li><strong>Year:</strong> {movie.Year}</li>
        <li><strong>Genre:</strong> {movie.Genre}</li>
        <li><strong>Director:</strong> {movie.Director}</li>
      </ul>
    <div></div>
        </div> 
        <img src={movie.Poster} alt={movie.Title} />

    </div>
  );
};

export default MovieDetail;
