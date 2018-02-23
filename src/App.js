import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import movieQuotes from 'movie-quotes';

class App extends Component {
  render() {
    console.log(movieQuotes)
    let quotes = movieQuotes.all.map((quote) => {
      return (
        <div>{quote}</div>
      )
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {quotes}
      </div>
    );
  }
}

export default App;
