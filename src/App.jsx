import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/Style.scss';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Starwars from './pages/Starwars1';
import News from './pages/News';
import Films from './pages/Films';
import Weathers from './pages/Weathers';

const App = () => {
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={ <Home /> } />
        <Route path="/starwars" element={ <Starwars /> } />
        <Route path="/news" element={ <News /> } />
        <Route path="/films" element={ <Films /> } />
        <Route path="/weathers" element={ <Weathers /> } />

      </Routes>
    </>
  );
}

export default App;
