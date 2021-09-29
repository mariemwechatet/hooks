
import React from 'react'
import './Trailer.css'

const Trailer = ({movies,match}) => {
  console.log(match)
  console.log(movies)
  let item=movies.find(el=>el.id==match.params.id)

    return (
        <div className="watch"> 
        <h1>{item.name}</h1>
        
        <br />
        {/* <video src={item.Trailer}></video> */}
        <iframe className="video" width="640" height="360" src={item.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
    )
}

export default Trailer
