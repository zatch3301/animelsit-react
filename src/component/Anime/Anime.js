import React, { Component } from 'react';
import './anime.scss';

export default class Anime extends Component {
  state = {
    showinfo: false,
  };
  handleInfo = () => {
    this.setState({
      showinfo: !this.state.showinfo,
    });
  };
  render() {
    const { id, img, name, city, info } = this.props.anime;
    const { removeAnime } = this.props;
    return (
      <article className="anime">
        <div className="img-constainer">
          <img src={img} alt=""></img>
        </div>
        <div className="animeinfo">
          <span className="close-btn" onClick={() => removeAnime(id)}>
            <i className="fas fa-window-close" />
          </span>
          <h3>{name}</h3>
          <h4>{city}</h4>
          <h5>
            info
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showinfo ? (
            <b>
              <p>{info}</p>
            </b>
          ) : null}
        </div>
      </article>
    );
  }
}
