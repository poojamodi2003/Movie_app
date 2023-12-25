import { useEffect, useState } from "react";
import './App.css';
import Search from './Search';
import Result from "./Result";

function App() {

  const [movies, setMovie] = useState([]);
  const [query, setQuery] = useState("");


  const movieApi = async () => {
    const response = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1");
    const movieData = await response.json();
    setMovie(movieData.results);
  }

  useEffect(
    () => {
      movieApi()
    },
    []
  )

  const getMoviesByQuery = async () => {
    const SEARCHAPI =
      `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${query}`;
    const response = await fetch(SEARCHAPI);
    const data = await response.json();
    setMovie(data.results);
  }

  useEffect(
    () => {
      if (query != "") {
        getMoviesByQuery()
      } else {
        movieApi();
      }
    },
    [query]
  )


  return (
    <div className="container">
      <Search query={query} handler={setQuery} />
      <Result data={movies} />
    </div>
  );
}

export default App;
