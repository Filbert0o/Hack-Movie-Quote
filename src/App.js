import React, { Component } from 'react';
import logo from './giphy.gif';
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
          <img src={logo} alt="logo" className="App-logo"/>
          <h1 className="App-title">Movie App</h1>
        </header>
        <ul className="list-group">
          {quotes}
        </ul>
      </div>
    );
  }
}

export default App;
