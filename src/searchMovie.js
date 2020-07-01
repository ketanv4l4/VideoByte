import React from 'react';
import './App.css';

function SearchMovie() {

 const onSearchMovie = async (e) => {
     e.preventDefault();
     console.log("vgh")
     
    //  const query = "320a50358c05fc0dab60872ae9cc4b74 park";
    //  const url = " http://www.omdbapi.com/?i=tt3896196&apikey=5a8cccd0";
     const abc = "https://api.themoviedb.org/3/movie/551?api_key=320a50358c05fc0dab60872ae9cc4b74"
     try{
        const res = await fetch(abc);
        const data = await res.json();
        console.log(data);
     }
     catch(err){
         console.log(err)

     }
 }
  return (
    <div className="container">
        <form className="form" onSubmit={onSearchMovie}>
         <label className="label" htmlFor="query">Movie Name</label>
         <input className="input" type="text" placeholder="i.e. Jurassic Park"></input>
         <button className="button"  type='submit'> Search </button>
        </form>
    </div>
  );
}

export default SearchMovie;
