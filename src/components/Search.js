import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './components.css';
import { Link } from 'react-router-dom';


class Search extends Component {

  render() {

    return (
      <div className="header" >
        <Grid container>
          <Grid item xs={4}>
            <Link to="/">
            <img src="./img/videobyte.png" alt="logo" className="logo"></img>
            </Link>
          </Grid>
          {/* <Grid item xs={8}>
            <div className="search">
            <input className="searchinput" type="text" name="" placeholder="Type a Movie here..."/>
            </div>
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

export default Search;