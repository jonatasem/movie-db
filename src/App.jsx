// Dependências
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes
import MovieList from './components/List/MovieList';
import MovieDetails from './components/details/MovieDetails';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;
