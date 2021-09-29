import React from 'react'
import { Link } from 'react-router-dom'
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
      <Link to={`/Trailer/${movies.id}`}> 
       <button className="btn" >Trailer </button>
       </Link>
    </div>
  )
}

export default MovieCard
