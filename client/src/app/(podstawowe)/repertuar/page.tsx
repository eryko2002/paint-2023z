'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Repertuar() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/repertuar')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <>
      <h1>Repertuar</h1>
      <Link href="/kup-bilet/1?date=2024-01-07T17-30">Film</Link>
      {movies.map((movie: Movie, index: number) => (
        <div key={index}>{movie.title}</div>
      ))}
    </>
  );
}
