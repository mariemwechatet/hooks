import React from 'react'
import StarRating from './MovieList/StarRating'

const Search = ({text, rating, handelChange, handelStar}) => {
    return (
        <div>
            <form >
                <input type="text" value={text} onChange={handelChange} />
                <StarRating rating={rating} handelRating={handelStar} />
            </form>
        </div>
    )
}

export default Search
