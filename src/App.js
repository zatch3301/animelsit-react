import React from 'react';
import './App.scss';
import Navbar from './component/Navbar/Navbar';
import AnimeList from './component/Animelist/AnimeList';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <h1>Best Anime of All Time</h1>
      <AnimeList />
    </React.Fragment>
  );
}

export default App;
