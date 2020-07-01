import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import SearchBar from "../elements/SearchBar/SearchBar";
import { URL_DETAIL, API_KEY } from '../apiKeys';

class popularMovies extends Component {
  // state = {
  //   movies: [],
  //   currentPage: 0,
  //   totalPages: 0,
  //   searchTerm: ""
  // };

  // componentDidMount() {
  

  //   axios.get(`${URL_DETAIL}popular${API_KEY}&language=en-US&page=1`)
  //     .then((res) => {
  //       this.setState({ movies: res.data.results });
  //       this.setState({ currentPage: res.data.page });
  //       this.setState({ totalPages: res.data.total_pages })
  //     });
  // }

  render() {
    return (
      <div className="popular">
        {/* <SearchBar /> */}
        {/* {this.state.movies.map((movies, i) => {
          return (
            <MovieCard key={i} movie={movies} />
          );}
        )} */}
        <MovieCard />
      </div>
    );
  }
}

export default popularMovies;