import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import popularMovies from './components/popularMovies';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import MovieDetails from './components/MovieDetails';
import 'fa-icons';
import 'font-awesome/css/font-awesome.min.css';
import Search from './components/Search';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Search />
          <Switch>
            <Route exact path="/" component={popularMovies} />
            <Route exact path="/movie/:id" component={(props) => <MovieDetails {...props} />} />
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>

    </div>
  );
}

export default App;
