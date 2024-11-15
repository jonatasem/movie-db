import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import 'react-circular-progressbar/dist/styles.css'; 
import './MovieList.scss';
import SideBar from '../SideBar/SideBar'; 

const BASE_URL = 'https://api.themoviedb.org/3';

const MovieItem = ({ movie }) => (
  <li key={movie.id}>
    <Link to={`/movie/${movie.id}`} state={{ movie }}>
      <div className='container-item'>
        <h2>{movie.title}</h2>
        <img 
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'caminho/para/imagem/padrao.jpg'} 
          alt={`Poster do filme "${movie.title}"`} 
        />
      </div>
    </Link>
  </li>
);

const MovieList = () => {
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`);
        setMovies(response.data.results); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchMovies(); 
  }, []); 

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar a lista de filmes. Tente novamente mais tarde. Detalhes: {error}</p>;
  if (filteredMovies.length === 0) return <p className='not-found'>Nenhum filme encontrado para a pesquisa.</p>;

  return (
    <>
      <SideBar setSearchTerm={setSearchTerm} /> 
      <section className='container-list'>
        <h1>Filmes Populares</h1>
        <ul>
          {filteredMovies.map(movie => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default MovieList;
