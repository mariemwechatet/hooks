import React from 'react'
import './MovieCard.css'
import StarRating from './StarRating'

const MovieCard = ({movies}) => {
  // console.log(movies.rating)
  return (
    <div className="card">
      <StarRating rating={movies.rating}/>
    
      <img src={movies.image} alt="" />
      <h3>{movies.data}</h3>
      <h3>{movies.name}</h3>
      
    </div>
  )
}

export default MovieCard
