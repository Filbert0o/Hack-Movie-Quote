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
    let quotes = movieQuotes.all.map((question, index) => {
      let split = question.split('"')
      let quote = split[1]
      let movie = split[2]
      return (
        <Question
          key={index}
          id={index}
          quote={quote}
          movie={movie}
        />
      )
    });

    let quote = quotes[this.getQuote()]
    let movie = quote.props.movie
    let movies = [movie]
    for (var i = 0; i < 3; i++) {
      movies.push(quotes[this.getQuote()].props.movie)
    }

    let moviesList = movies.sort().map((title) => {
      return (
        <li>{title}</li>
      )
    })

return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo"/>
          <h1 className="App-title">Movie App</h1>
        </header>
        <ul className="list-group">
          {quote}
        </ul>
        <ul>
          {moviesList}
        </ul>
      </div>
    );
  }
}

export default App;
