import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/Style.scss';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Starwars from './pages/Starwars1';

const App = () => {
  return (
    <React.StrictMode>
      <Header />

      <Routes>

        <Route path="/" element={ <Home /> } />
        <Route path="/starwars" element={ <Starwars /> } />

      </Routes>
    </React.StrictMode>
  );
}

export default App;
