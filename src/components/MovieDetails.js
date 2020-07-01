import React, { Component } from 'react';
import axios from "axios";
import { URL_DETAIL, API_KEY } from '../apiKeys';
import DetailMovieCard from './DetailMovieCard/DetailMovieCard';

  
class MovieDetails extends Component {
  state={
    movieData:{ }
  };

  componentDidMount(){
    const {id}= this.props.match.params;
    axios 
       .get(
        `${URL_DETAIL}${id}${API_KEY}&language=en-US&page=1`
       )
       .then(response => {
				this.setState({ movieData: response.data });
			});
	
  }

render() {
  console.log(this.state.movieData)

  return (
      <div>
          <DetailMovieCard movie={this.state.movieData}/>
      </div>
  );
  }
  }

export default MovieDetails;