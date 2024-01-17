'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/home')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <>
      <div>Strona Główna</div>
      {movies.map((movie: Movie, index: number) => (
        <div key={index}>{movie.title}</div>
      ))}
    </>
  );
}
