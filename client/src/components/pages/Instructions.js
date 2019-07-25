import React, { Component } from 'react';

class Instructions extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      instructions: []
    }
  }

  // Fetch the instructions on first mount
  componentDidMount() {
    this.getInstructions();
  }

  // Retrieves the instructions of items from the Express app
  getInstructions = () => {
    fetch('/api/getInstructions')
    .then(res => res.json())
    .then(instructions => this.setState({ instructions }))
  }

  render() {
    const { instructions } = this.state;

    return (
      <div className="App">
        <h1>Instructions</h1>
        {/* Check to see if any items are found*/}
        {instructions.length ? (
          <div>
            {/* Render the instructions of items */}
            {instructions.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No Instructions Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default Instructions;
