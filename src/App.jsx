import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './App.css';
import Tabs from "./Tabs";
import Chart from "react-apexcharts";
import UsersTable from './UsersTable';


function App() {
  const [movies, setmovies] = useState([])
  useEffect(() => {
    axios.get('https://nutty-sandals-clam.cyclic.app/Users')
      .then(res => {
        console.log(res.data)
        setmovies(res.data)
      })
  }, [])

 

  const [user_movie_likes, setuser_movie_likes] = useState([])
  useEffect(() => {
    axios.get('https://nutty-sandals-clam.cyclic.app/Movies')
      .then(res => {
        console.log(res.data)
        setuser_movie_likes(res.data)
      })
  }, [])

  const [most_liked_movies, setmost_liked_movies] = useState([])
  useEffect(() => {
    axios.get('https://nutty-sandals-clam.cyclic.app/MovieLikes')
      .then(res => {
        console.log(res.data)
        setmost_liked_movies(res.data)
      })
  }, [])

  const nav = document.getElementById('nav');
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
          nav.classList.add('nav__black');
        } else {
          nav.classList.remove('nav__black');
        }
      });

  
  return (

    <div>
      <div id="nav" class="nav">
      <img class="nav__logo" src="https://cdn.discordapp.com/attachments/721330944304349186/1105815361313591316/netflix-logo.png" alt="" />
      <img class="nav__avatar" src="https://cdn.discordapp.com/attachments/721330944304349186/1105815361561043054/netflix-avatar.png" alt="" />
    </div>

    <header class="banner">
      <div class="banner__contents">
        <h1 class="banner__title">Money Heist</h1>
        <div class="banner__buttons">
          <button class="banner__button">Play</button>
          <button class="banner__button">My List</button>
        </div>
        <h1 class="banner__description">
          To carry out the biggest heist in history, a mysterious man called The Professor recruits
          a band of eight robbers who have a single characteristic: n...
        </h1>
      </div>
      <div class="banner--fadeBottom"></div>
    </header>
     
      <div class="row">
      <h2>NETFLIX ORIGINALS</h2>
      <div class="row__posters">
      {movies.map((movie) => (
      <img
        key={movie.ID}
        class="row__poster row__posterLarge"
        src={movie.url}
        alt={movie.image}
      />
    ))}
        <img class="row__poster row__posterLarge"  />

        <img class="row__poster row__posterLarge"  />

        <img class="row__poster row__posterLarge"  />

        <img class="row__poster row__posterLarge"  />

        <img class="row__poster row__posterLarge"  />

        <img class="row__poster row__posterLarge"  />

        <img class="row__poster row__posterLarge"  />

        <img class="row__poster row__posterLarge"  />

        <img class="row__poster row__posterLarge" src="images/large-movie8.jpg" alt="" />
      </div>
    </div>
        <div className="App">
      <Tabs />
    </div>
  
    </div>  
  )
}
export default App

