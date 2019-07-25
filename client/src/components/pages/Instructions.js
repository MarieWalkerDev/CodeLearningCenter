import React, { Component } from 'react';
import './Dashboard.css';

class Instructions extends Component {
  constructor(props){
    super(props);
    this.state = {
      instructions: [],
      count: 1,
    }
  }

  componentDidMount() {
    this.getInstructions();
  };

  getInstructions = () => {
    fetch('/api/getInstructions')
    .then(res => res.json())
    .then(instructions => this.setState({ instructions }))
  };

  handleNextLessonClick = () => {
    if (this.state.count < this.state.instructions.length) {
      this.setState(prevState => {
        return {
          ...prevState,
          count: prevState.count + 1
        }
      });

    };

    this.props.getInput(
      this.state.instructions[this.state.count].input,
      this.state.instructions[this.state.count].output,
      this.state.instructions[this.state.count].id
    );
  };

  handlePreviousLessonClick = () => {
    if (this.state.count > 0) {
      this.setState(prevState => {
        return {
          ...prevState.count,
          count: prevState.count - 1
        }
      });
      console.log('this.state.count: ', this.state.count);
    };

    this.props.getInput(
      this.state.instructions[this.state.count-1].input,
      this.state.instructions[this.state.count-1].output,
      this.state.instructions[this.state.count-1].id
    );
  };



  render() {
    const { instructions } = this.state;

    const isPrevDisabled = this.state.count === 0 ? 'disabled' : '';

    const isNextDisabled = this.state.count === this.state.instructions.length ? 'disabled' : '';

    return (
      <div className="instructions">
        <div className='inst'>
          <div className='lesson-title'>
            <i className='book icon'></i> Instructions
            </div>

            {instructions.length ? (
              <div>
                {instructions.map((item) => {
                  if (item.id === this.state.count) {
                    return(
                      <div key={item.id}>
                        <h3>{item.lesson}</h3>
                        <p>{item.description[0]}</p>
                        <p>{item.description[1]}</p>
                        <p>{item.description[2]}</p>
                      </div>
                    );
                  };
              })}
              </div>
            ) : (
              <div>
                <h2>No Instructions Found</h2>
              </div>
            )
          }
        </div>
        <div className='navbtns'>
          <button onClick={this.handlePreviousLessonClick} disabled={isPrevDisabled} >Previous Lesson</button>
          <button onClick={this.handleNextLessonClick} disabled={isNextDisabled} >Next Lesson</button>
        </div>
      </div>
    );
  }
}

export default Instructions;
