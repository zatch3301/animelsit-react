import React, { Component } from 'react';
import Anime from '../Anime';
import './animelist.scss';
import { animeData } from '../../animeData';

export default class AnimeList extends Component {
  state = {
    anime: animeData,
  };

  removeAnime = (id) => {
    console.log(id);
    const { anime } = this.state;
    const sortedAnime = anime.filter((anime) => anime.id !== id);
    this.setState({
      anime: sortedAnime,
    });
  };

  render() {
    const { anime } = this.state;
    return (
      <section className="animelist">
        {anime.map((anime) => (
          <Anime
            key={anime.id}
            anime={anime}
            removeAnime={this.removeAnime}
          ></Anime>
        ))}
      </section>
    );
  }
}
