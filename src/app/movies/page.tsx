'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/dist/client/link';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/movies`
        );
        //console.log(response.data.movies);
        setMovies(response.data.movies);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movies-container">
      <h1>Movies</h1>
      <ul className="movies-list">
        {movies.map((movie: { id: number; title: string; slug: string }) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
