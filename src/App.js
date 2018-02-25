import React, { Component } from 'react';
import logo from './giphy.gif';
import './App.css';
import movieQuotes from 'movie-quotes';
import Question from './components/Question';

class App extends Component {

  getQuote() {
    let num = Math.floor(Math.random() * Math.floor(100));
    return num
  }

  render() {
    let quotes = movieQuotes.all.map((quote, index) => {
      return (
        <Question
          key={index}
          id={index}
          content={quote}
        />
      )
    });

    let quote = quotes[this.getQuote()]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo"/>
          <h1 className="App-title">Movie App</h1>
        </header>
        <ul className="list-group">
          {quote}
        </ul>
      </div>
    );
  }
}

export default App;
