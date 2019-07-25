import React, { Component } from 'react';
import './Dashboard.css';


//  getInput(input, output)
// takes two parameter


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

    let count = 0;

    return (
      <div className="instructions">
        <div>
          <div className='lesson-title'>
            <i className='book icon'></i> Instructions
            </div>

            {/* Check to see if any items are found*/}
            {instructions.length ? (
              <div>
                {/* Render the instructions of items */}
                {count++}
                  return(
                    <div key={instructions[count].lesson}>
                      {instructions[count].lesson}
                      {instructions[count].description}
                    </div>
                  );




              </div>
            ) : (
              <div>
                <h2>No Instructions Found</h2>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Instructions;


// {instructions.map((item) => {
//
//   return(
//     <div key={item.lesson}>
//       {item.lesson}
//       {item.description}
//     </div>
//   );
// })}
