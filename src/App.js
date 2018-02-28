import React, { Component } from 'react';
import logo from './giphy.gif';
import './App.css';
import movieQuotes from 'movie-quotes';
import Question from './components/Question';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      score: "",
      answer: "answer",
      quote: ""
    }
    this.checkAnswer=this.checkAnswer.bind(this)
    this.getQuote=this.getQuote.bind(this)
  }

  getQuote() {
    let num = Math.floor(Math.random() * Math.floor(100));
    return num
  }

  checkAnswer(title) {
    if (title === this.state.quote) {
      this.setState( { answer: "right",
      score: "Correct!  You're the smartest person alive!" }
      );
  } else {
    this.setState( { answer: "wrong",
    score: "Wrong!  Ya big dumb idiot!" }
    );
  }
  }

  render() {

    let quotes = movieQuotes.all.map((question, index) => {
      let split = question.split('"')
      var quote = split[1]
      var movie = split[2]
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

    let moviesList = movies.sort().map((title, index) => {

      let handleClick = () => { this.checkAnswer({title}) }
      return (
        <button id={index} className={this.state.answer} onClick={handleClick}>{title}</button>
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
        <div>
          {this.state.score}
        </div>
      </div>
    );
  }
}

export default App;
