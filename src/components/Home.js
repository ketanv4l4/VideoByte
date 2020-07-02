import React, { Component } from 'react';
import MovieCard from './MovieCard';

class Home extends Component {
 
  render() {
    return (
      <div className="popular">
        <MovieCard />
      </div>
    );
  }
}

export default Home;