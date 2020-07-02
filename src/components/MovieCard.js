import React, { Component } from 'react';
import axios from 'axios';
import { URL_DETAIL, API_KEY,URL_SEARCH,API_URL} from '../apiKeys';
import Card from 'react-bootstrap/Card'
import { Row, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import './components.css';
import { Link } from 'react-router-dom';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import SearchBar from "../elements/SearchBar/SearchBar";
import Spinner from '../elements/Spinner/Spinner';

// import Fade from 'react-reveal/Fade';


class MovieCard extends Component {
  state = {
    loading: false,
    results: [],
    searchTerm:""
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios.get(`${URL_DETAIL}popular${API_KEY}&language=en-US&page=1`)
      .then((res) => {
        this.setState({ results: res.data.results });
        this.setState({  loading: false });
      });
    // axios.get(`${URL_DETAIL}popular${API_KEY}&language=en-US&page=3`)
    //   .then((res) => {
    //     this.setState({ resultsB: res.data.results });
    //   });

  }

  searchItems = searchTerm => {
    console.log(searchTerm);
    // let endpoint = "";
    this.setState({
      loading: true,
      results: [],
      searchTerm
    });
    if (searchTerm === "") {
      axios.get(`${URL_DETAIL}popular${API_KEY}&language=en-US&page=1`)
        .then((res) => {
          this.setState({ results: res.data.results });
          this.setState({  loading: false });
        });
    } else {
      axios.get(`${API_URL}search/movie${API_KEY}&language=en-US&query=${searchTerm}`)
        .then((res) => {
          this.setState({ results: res.data.results });
          this.setState({  loading: false });
        });
    }
  };

 

  render() {

    return (
      <div className="MovieCard">
        <SearchBar  callback={this.searchItems} />
        {this.state.searchTerm ? <h3 style={{ color: '#fff' }}> Search result</h3> : <h3 style={{ color: '#fff' }}> Popular Movies</h3>}
        <Row>
          {this.state.results.map((movie, key) => (
            <Col lg={3} sm={4} xs={6} key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <Card className="hovereffect" style={{ border: " 2px solid rgb(95, 228, 95)" }} >
                  <Card.Img className="movieimg" variant="top" src={movie.poster_path  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "./img/noimg.png"} />
                  <div className="overlay">
                    <h2 >{movie.title}<br></br><span>{movie.release_date}</span></h2>
                  </div>
                </Card>
              </Link>
            </Col>
          ))
          }
        {this.state.loading ? <Spinner /> : null}
        </Row>
        {/* <LoadMoreBtn onClick={this.loadMoreItems} /> */}

        {/* <Row>
        {this.state.resultsB.map((movie,key) => (
          <Col lg={3} xs={6} key={movie.id}>             
              <Card border="dark" className="card" >
                 <Card.Img className="cardimg" variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />

                 <Card.Body className="cardtitle">
                 <Card.Title >{movie.title}</Card.Title>
                </Card.Body>
              </Card>
        </Col>
        ))
      }
        </Row> */}

      </div>
    );
  }
}

export default MovieCard;