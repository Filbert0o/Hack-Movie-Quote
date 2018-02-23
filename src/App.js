import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import movieQuotes from 'movie-quotes';
import Question from './components/Question';

class App extends Component {
  render() {
    console.log(movieQuotes)
    let quotes = movieQuotes.all.map((quote, index) => {
      return (
        <Question key={index} id={index} content={quote} />
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
        <ul className="list-group">
          {quotes}
        </ul>
      </div>
    );
  }
}

export default App;
