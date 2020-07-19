import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameDashboard from './GameDashboard';

class App extends Component {
  state = {
    correctAnswer: 0,
    totalQuestions: 0
  };

  answerHandler = (userAnswerCorrect) => {
    if (userAnswerCorrect) {
      this.setState((prevState) => ({
        correctAnswer: prevState.correctAnswer + 1
      }));
    }
    this.setState((prevState) => ({
      totalQuestions: prevState.totalQuestions + 1
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <GameDashboard answerHandler={this.answerHandler} />
          <p className="text">
            Your Score: {this.state.correctAnswer}/{this.state.totalQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
