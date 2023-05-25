import { useEffect, useState } from "react";
import "./App.css";
import "./components/modal/movideCard.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ModalComponent from "./components/modal/modalTest";

function App() {
  /**Stored data from API in three states to maipulate them */

  const [inTheatersData, setinTheatersData] = useState([]);
  const [comingSoonData, setcomingSoonData] = useState([]);
  const [searchedData, setsearchedData] = useState([]);

  /**Stored user input to then call the searchedData fetch*/
  const [userInput, setUserInput] = useState("");
  /** State to make conditianl rendering of component */
  const [showSearchResults, setShowSearchResults] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;
  /**Function to get user input */
  function handleChange(e) {
    setUserInput(e.target.value);
  }
  /**Function to fire fetch with User Input */
  function handleClick() {
    setUserInput("");
    fetchSearchedData(userInput);
  }
  /** Same as above but when user press 'Enter' key */
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      fetchSearchedData(userInput);
      setUserInput("");
    }
  }
  /**Changing title name */
  useEffect(() => {
    document.title = "AtoMovies";
  }, []);
  /**Fetching data */
  useEffect(() => {
    async function getInTheatersData() {
      let response = await fetch(
        `https://imdb-api.com/en/API/InTheaters/${API_KEY}`
      );
      let data = await response.json();
      setinTheatersData(data.items);
    }
    getInTheatersData();
  }, []);
  /**Fetching data */
  useEffect(() => {
    async function getComingSoonData() {
      let response = await fetch(
        `https://imdb-api.com/en/API/ComingSoon/${API_KEY}`
      );
      let data = await response.json();
      setcomingSoonData(data.items);
    }
    getComingSoonData();
  }, []);
  /**Fetching data */
  async function fetchSearchedData() {
    let response = await fetch(
      `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${userInput}`
    );
    let data = await response.json();
    setsearchedData(data.results);

    setShowSearchResults(true);
  }

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
              {/* Mapping through api and return a Card/modal component for each result from 1 to 10 */}
              {searchedData.slice(0, 10).map((movie) => {
                return (
                  <ModalComponent
                    id={movie.id}
                    title={movie.title}
                    image={movie.image}
                    cast={movie.description}
                  ></ModalComponent>
                );
              })}
            </div>
          </div>
        )}
        <div className="in-theaters">
          <h1>In theaters</h1>
          <div className="in-theaters-flex-div">
            {inTheatersData.slice(0, 10).map((movie) => {
              return (
                <>
                  <ModalComponent
                    id={movie.id}
                    title={movie.title}
                    image={movie.image}
                    cast={movie.stars}
                    text={movie.plot}
                  ></ModalComponent>
                </>
              );
            })}
          </div>
        </div>
        <div className="in-theaters">
          <h1>Coming soon</h1>
          <div className="in-theaters-flex-div">
            {comingSoonData.slice(0, 10).map((movie) => {
              return (
                <ModalComponent
                  id={movie.id}
                  title={movie.title}
                  image={movie.image}
                  cast={movie.stars}
                  text={movie.plot}
                ></ModalComponent>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
