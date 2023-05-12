import React from 'react'
import './movideCard.css'
const MovieCard = ({title, id, img, text}) => {
    return (
        <div className='card-div' key={id} >
            <h1>{title}</h1>
            <img alt={title} src={img}>
            </img>
            <p>{text}</p>
        </div>
    )
}

export default MovieCard