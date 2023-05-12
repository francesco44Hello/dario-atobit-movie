import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/movieCard";

function App() {
  const [data, setData] = useState([]);
  const [dataSoon, setDataSoon] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    async function getData() {
      console.log('fetch')
      // console.log("api key", API_KEY);
      let response = await fetch(
        `https://imdb-api.com/en/API/InTheaters/${API_KEY}`
      );
      // get json out of the response object - data!
      // console.log();
      let data = await response.json(); //upacking something with .json
      // console.log("funziona");
      // console.log(data.items[0]);
      setData(data.items);
    }
    getData();
  }, []);
  useEffect(() => {
    async function getDataSoon() {
      // console.log("api key", API_KEY);
      console.log('fetch')
      let response = await fetch(
        `https://imdb-api.com/en/API/ComingSoon/${API_KEY}`
      );
      // get json out of the response object - data!
      // console.log();
      let data = await response.json(); //upacking something with .json
      // console.log("funziona");
      // console.log(data.items[0]);<
      // console.log(data);
      setDataSoon(data.items);
    }
    getDataSoon();
  }, []);

  return (
    <div className="main-div">
      <div className="input-div">
        <input className="input" placeholder="Search movie"></input>
      </div>
      <div className="in-theaters">
        <h1>In theaters</h1>
        <div className="in-theaters-flex-div">
          {data.slice(0, 3).map((movie, id) => {
            return (
              <MovieCard
                id={id}
                title={movie.title}
                img={movie.image}
                text={movie.plot}
              />
            );
          })}
        </div>
      </div>
      {/* <div className="coming-soon"> */}
      <div className="in-theaters">
        <h1>Coming soon</h1>
        <div className="in-theaters-flex-div">
          {dataSoon.slice(0, 3).map((movie, id) => {
            return (
              <MovieCard
                id={id}
                title={movie.title}
                img={movie.image}
                text={movie.stars}
              />
            );
          })}
        </div>
      {/* </div> */}
      </div>
    </div>
  );
}

export default App;
