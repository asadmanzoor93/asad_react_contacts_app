import React, { Component, Fragment } from 'react';

class GameDashboard extends Component {
  constructor(props) {
    super(props);
    const firstQuestion = this.prepareNewQuestion();
    this.state = {
      value1: firstQuestion[0],
      value2: firstQuestion[1],
      value3: firstQuestion[2],
      proposedAnswer: firstQuestion[3]
    };
  }

  prepareNewQuestion = () => {
    let value1 = Math.floor(Math.random() * 100);
    let value2 = Math.floor(Math.random() * 100);
    let value3 = Math.floor(Math.random() * 100);
    let proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  };

  answerEvaluation = (event) => {
    const answer = event.target.dataset.answer;
    const { value1, value2, value3, proposedAnswer } = this.state;
    const corrAnswer = value1 + value2 + value3;

    const userAnswer =
      (corrAnswer === proposedAnswer && answer === 'true') || (corrAnswer !== proposedAnswer && answer === 'false');
    this.props.answerHandler(userAnswer);
    const newQuestion = this.prepareNewQuestion();
    this.setState({
      value1: newQuestion[0],
      value2: newQuestion[1],
      value3: newQuestion[2],
      proposedAnswer: newQuestion[3]
    });
  };

  render() {
    return (
      <Fragment>
        <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
        </div>
        <button data-answer="true" onClick={this.answerEvaluation}>
          True
        </button>
        <button data-answer="false" onClick={this.answerEvaluation}>
          False
        </button>
      </Fragment>
    );
  }
}

export default GameDashboard;
