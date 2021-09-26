import React from 'react'
import MovieCard from './MovieCard'
import './MovieCard.css'

const MovieList = ({list}) => {
    return (
        <div className="list">{
            list.map((el,i)=><MovieCard movies={el} key={i}/>)
            }
        </div>
    )
}

export default MovieList
