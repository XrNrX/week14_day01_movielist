import React, { Component } from 'react';
import './Movie.css'

class Movie extends Component {
  render(){
    const {name, url} = this.props
    return(
      <div className="movie">
      <li><a href={name}>{url}</a></li>
      </div>
    )
  }
}

export default Movie;
