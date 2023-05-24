import { useEffect, useState } from "react";
import "./App.css";
import './components/movieCard/movideCard.css'
import Example from "./components/modal/modalTest";
import Header from "./components/header/header";


function App() {
  const [dataFetch, setDataFetch] = useState([]);
  const [dataSoon, setDataSoon] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleClick() {
    setUserInput("");
    fetchData(userInput);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      fetchData(userInput);
      setUserInput("");
    }
  }

  useEffect(() => {
    document.title = "AtoMovies";
  }, []);

  useEffect(() => {
    async function getData() {
      let response = await fetch(
        `https://imdb-api.com/en/API/InTheaters/${API_KEY}`
      );
      let data = await response.json();
      setDataFetch(data.items);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getDataSoon() {
      let response = await fetch(
        `https://imdb-api.com/en/API/ComingSoon/${API_KEY}`
      );
      let data = await response.json();
      setDataSoon(data.items);
    }
    getDataSoon();
  }, []);
console.log(dataSoon)
  async function fetchData() {

    let response = await fetch(
      `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${userInput}`
    );
    let data = await response.json();
    setSearchData(data.results);

    setShowSearchResults(true);
  }

  // console.log(searchData);
  return (
    <>
      <div className="main-div">
      <Header />
        <div className="input-div">
          <input
            className="input"
            placeholder="Search movie"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          ></input>
          <button onClick={handleClick} className="search-button">
            Search
          </button>
        </div>
        {showSearchResults && (
          <div className="in-theaters">
            <h1>Your results: </h1>
            <div className="in-theaters-flex-div">
              {searchData.slice(0, 10).map((movie) => {
                return (
                  <Example
                    id={movie.id}
                    title={movie.title}
                    image={movie.image}
                    cast={movie.description}
                  ></Example>
                );
              })}
            </div>
          </div>
        )}
        <div className="in-theaters">
          <h1>In theaters</h1>
          <div className="in-theaters-flex-div">
            {dataFetch.slice(0, 10).map((movie) => {
              return (
                <>
                  <Example
                    id={movie.id}
                    title={movie.title}
                    image={movie.image}
                    cast={movie.stars}
                    text={movie.plot}
                  ></Example>
                </>
              );
            })}
          </div>
        </div>
        <div className="in-theaters">
          <h1>Coming soon</h1>
          <div className="in-theaters-flex-div">
            {dataSoon.slice(0, 10).map((movie) => {
              return (
                  <Example
                    id={movie.id}
                    title={movie.title}
                    image={movie.image}
                    cast={movie.stars}
                    text={movie.plot}
                  ></Example>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
