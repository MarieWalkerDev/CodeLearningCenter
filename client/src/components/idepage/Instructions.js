import React, { Component } from 'react';
import './Dashboard.css';

class Instructions extends Component {
  constructor(props){
    super(props);
    this.state = {
      lines:"",
    
    }
  }

onChange=(e)=>{
    this.setState({lines:e.target.value})
    
      }

  render() {
 

    return (
      <div className="instructions">
       <form >
       
      <fieldset>
        <p>
          <label>Code Area</label>
          <textarea id = "myTextArea"
                 spellCheck="false" value={this.state.lines} onChange={this.onChange}></textarea>
        </p>
      </fieldset>
   
    </form>
      </div>
    );
  }
}

export default Instructions;
