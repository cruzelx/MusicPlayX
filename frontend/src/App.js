import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar';
import SuggestedSong from "./components/SuggestedSong";

function App() {
  return (
    <div className="App">
      <Searchbar />
      <SuggestedSong />
    </div>
  );
}

export default App;