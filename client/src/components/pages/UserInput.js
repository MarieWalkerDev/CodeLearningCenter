import React ,{useState} from 'react';
import "./UserInput.css"
const languages=[{"id":1,"name":"Bash (4.4)"},{"id":2,"name":"Bash (4.0)"},{"id":3,"name":"Basic (fbc 1.05.0)"},{"id":4,"name":"C (gcc 7.2.0)"},{"id":5,"name":"C (gcc 6.4.0)"},{"id":6,"name":"C (gcc 6.3.0)"},{"id":7,"name":"C (gcc 5.4.0)"},{"id":8,"name":"C (gcc 4.9.4)"},{"id":9,"name":"C (gcc 4.8.5)"},{"id":10,"name":"C++ (g++ 7.2.0)"},{"id":11,"name":"C++ (g++ 6.4.0)"},{"id":12,"name":"C++ (g++ 6.3.0)"},{"id":13,"name":"C++ (g++ 5.4.0)"},{"id":14,"name":"C++ (g++ 4.9.4)"},{"id":15,"name":"C++ (g++ 4.8.5)"},{"id":16,"name":"C# (mono 5.4.0.167)"},{"id":17,"name":"C# (mono 5.2.0.224)"},{"id":18,"name":"Clojure (1.8.0)"},{"id":19,"name":"Crystal (0.23.1)"},{"id":20,"name":"Elixir (1.5.1)"},{"id":21,"name":"Erlang (OTP 20.0)"},{"id":22,"name":"Go (1.9)"},{"id":23,"name":"Haskell (ghc 8.2.1)"},{"id":24,"name":"Haskell (ghc 8.0.2)"},{"id":25,"name":"Insect (5.0.0)"},{"id":26,"name":"Java (OpenJDK 9 with Eclipse OpenJ9)"},{"id":27,"name":"Java (OpenJDK 8)"},{"id":28,"name":"Java (OpenJDK 7)"},{"id":29,"name":"JavaScript (nodejs 8.5.0)"},{"id":30,"name":"JavaScript (nodejs 7.10.1)"},{"id":31,"name":"OCaml (4.05.0)"},{"id":32,"name":"Octave (4.2.0)"},{"id":33,"name":"Pascal (fpc 3.0.0)"},{"id":34,"name":"Python (3.6.0)"},{"id":35,"name":"Python (3.5.3)"},{"id":36,"name":"Python (2.7.9)"},{"id":37,"name":"Python (2.6.9)"},{"id":38,"name":"Ruby (2.4.0)"},{"id":39,"name":"Ruby (2.3.3)"},{"id":40,"name":"Ruby (2.2.6)"},{"id":41,"name":"Ruby (2.1.9)"},{"id":42,"name":"Rust (1.20.0)"},{"id":43,"name":"Text (plain text)"}]
const UserInput = (props) => {
  const[language,setLanguage]=useState(29);
  const [lines, setLines]=useState(``);

  const onChange=(e)=>{
setLines(e.target.value)

  }
  const listChange=(e)=>{
setLanguage(e.target.value)
  }
  const handleSubmit=(e)=>
  {
    let jsCode=""
    if (language===29){
     jsCode=`var readline = require('readline');
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });

    rl.on('line', function(line){
    //your code here
    ${lines}
    })`}else{jsCode=lines}
    e.preventDefault();
    props.handleCode(jsCode,language);
  }
  return (
    <div className='userinput-content'> <div className='lesson-title'>
    <i className='icon keyboard'></i> Code
    </div>
     <form onSubmit={handleSubmit} style={{height:"70vh"}}>
       <select name="languages" onChange={listChange}> <option defaultValue="29" value="29">JavaScript</option>{languages.map(lan=>{
      return (<option key ={lan.id} value={lan.id}>{lan.name}</option>
      )})}</select>
      <fieldset>
        <p>
          <label>Type your code here!</label>
          <textarea id = "myTextArea"
                 spellCheck="false" value={lines} style={{height:"66vh"}} onChange={onChange}></textarea>
        </p>
      </fieldset>
      <input class="form-button" disabled={props.loading ? true : false} type="submit" value="Submit Your Code" />
    </form>
    </div>
  );
};

export default UserInput;
