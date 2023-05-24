import React from "react";
import "./movideCard.css";


const MovieCard = ({ title, id, img, text }) => {
  return (
    <>
      <div className="card-div" key={id}>
        <h1 style={{ whiteSpace: "normal" }}>{title}</h1>
        <img alt={title} src={img}></img>
        <div className="text-div">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
