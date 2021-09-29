
import React, { useState } from 'react';
import "./App.css";
import Header from "./components/header/Header";
import MovieList from "./components/MovieList/MovieList";
import {datamovies} from "./components/data"
import Add from './components/header/Add';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Trailer from "./components/Trailer/Trailer";








function App() {
  const [movies, setMovies] = useState(datamovies)
  const [text, setText] = useState("")
  const [stars, setStars] = useState(1)
  //add movie
  let handelAdd=(newmovie)=>{
    setMovies([...movies,newmovie])
  }
  // handel text
  let handelChange=(e)=>{setText(e.target.value)}
  // handel stars
  let handelStar=(x)=>{setStars(x)}
  
  return (
    <>
  <Header/>

    <div className="app">
    <Router>
      <Switch>

       
    
   <Route exact path="/" >
   <Search text={text} rating={stars} handelChange={handelChange} handelStar={handelStar}/>
   <MovieList list={movies.filter(el=>el.name.toUpperCase().includes(text.toUpperCase())&& (el.rating>=stars))}/>
   <Add add={handelAdd}/>
   </Route>
   <Route exact path="/Trailer/:id" render={(props)=><Trailer {...props} movies={movies}/>}/>
      </Switch>
    </Router>
    
    </div>
    </>
  );
}

export default App;
