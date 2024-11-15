import React from 'react';
import { useLocation } from 'react-router-dom';
import './MovieDetails.scss';

const MovieDetails = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) return <p>Filme não encontrado.</p>;

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const posterUrl = movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'caminho/para/imagem/padrao.jpg';

  return (
    <section className='movie-details'>
      <article className='movie-title'>
        <h2>{movie.title}</h2>
        <img src={posterUrl} alt={`Poster do filme ${movie.title}`} />
   
      </article>
      <article className='movie-description'>
        <p className='overview-title'>{movie.overview}</p>
        <div className="container-description">
          <p><strong>Lançamento:</strong> {movie.release_date}</p>
          <p><strong>Avaliação:</strong> {movie.vote_average} / 10</p>
          <p><strong>Duração:</strong> {movie.runtime} minutos</p>
          <p><strong>Gêneros:</strong> {movie.genres ? movie.genres.map(genre => genre.name).join(', ') : 'Gêneros não disponíveis'}</p>
        </div>
      </article>
    </section>
  );
};

export default MovieDetails;