import React, { Component } from 'react';
import Movie from './Movie.js'
import './MovieList.css'

class MovieList extends Component {
  render(){
    const movieData = this.props.data.map(movie => {
      return (
        <Movie key={movie.id} name={movie.url} url={movie.name}></Movie>
      )
    });
    return (
      <div className="movie-list">
      <h4>{movieData}</h4>
      <hr />
       <a href="https://www.imdb.com/calendar/?region=gb">
       <button>Upcoming Releases > ></button></a>
      </div>

    )
  }
}

export default MovieList;
