import React ,{useState} from 'react';

const UserInput = (props) => {
  
  const [lines, setLines]=useState(`var readline = require('readline');
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  
  rl.on('line', function(line){
  //your code here
  console.log('hello, ', line)
  })`);

  const onChange=(e)=>{
setLines(e.target.value)
console.log(lines)
  }
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    props.handleCode(lines);
  }
  return (
    <div>
     <form onSubmit={handleSubmit}>
      <fieldset>
        <p>
          <label>Code Area</label>
          <textarea id = "myTextArea"
                  rows = "30"
                  cols = "60" spellCheck="false" value={lines} onChange={onChange}></textarea>
        </p>
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
};

export default UserInput;
