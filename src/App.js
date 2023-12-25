import React from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import MovieList from './Components/MovieList/MovieList'
import {action,originals} from './urls'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <MovieList url={originals} title='Netflix Original' isSmall/>
      <MovieList url={action} title='Action'/>
    </div>
  );
}

export default App;
