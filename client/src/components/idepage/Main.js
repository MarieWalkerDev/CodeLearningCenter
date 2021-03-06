import React,{useState, useEffect, useRef} from 'react';
import Instructions from './Instructions';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import './Dashboard.css';


const Main = (props) => {
  const[code,setCode]=useState("");
  const[token,setToken]=useState("");
  const [answer,setAnswer]=useState(null);
  const[output, setOutput]=useState(`hello dubs\n`);
  const[input,setInput]=useState("dubs")
  const firstUpdate = useRef(true);
  const [lesson, setLesson]=useState(1);
  const [loading, setLoading]=useState(false);
  console.log(answer)
  useEffect(()=>{
    if (firstUpdate.current) {

    return;
  }
  async function passCode(code) {
setLoading(true)

    try {
        const response = await fetch(
            `https://api.judge0.com/submissions`,{method:'POST', headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }, body: JSON.stringify(code) }
        );
        const holder  = await response.json();
        console.log(holder)
        setTimeout(()=>setToken(holder.token),3000)


    } catch (e) {
        console.error(e);
    }
  };

    passCode(code)

  },[code])
  useEffect(()=>{
    if (firstUpdate.current) {
    firstUpdate.current = false;
    return;
  }

  async function passToken() {


    try {
        const response = await fetch(
            `https://api.judge0.com/submissions/${token}`
        );
        const holder  = await response.json();
        setAnswer([holder])
setLoading(false);

    } catch (e) {
        console.error(e);
    }
  };

    passToken(token)

  },[token])
  const handleCode=(passedCode, language)=>{
    let formattedCode=passedCode ;
      let codeObject={"source_code":formattedCode,"language_id":language,"number_of_runs":"1","stdin":input,"expected_output":output,"cpu_time_limit":"2","cpu_extra_time":"0.5","wall_time_limit":"5","memory_limit":"128000","stack_limit":"64000","max_processes_and_or_threads":"30","enable_per_process_and_thread_time_limit":false,"enable_per_process_and_thread_memory_limit":true,"max_file_size":"1024"}
    let precode={"source_code":"var readline = require('readline');\nvar rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout,\n  terminal: false\n});\n\nrl.on('line', function(line){\n    console.log(\"hello,\",line);\n})","language_id":"29","number_of_runs":"1","stdin":"Judge0","expected_output":"hello, Judge0","cpu_time_limit":"2","cpu_extra_time":"0.5","wall_time_limit":"5","memory_limit":"128000","stack_limit":"64000","max_processes_and_or_threads":"30","enable_per_process_and_thread_time_limit":false,"enable_per_process_and_thread_memory_limit":true,"max_file_size":"1024"}
    console.log(codeObject)
    setCode(codeObject)
      }

     const handleInput=(passedInput, passedOutput, lesson)=> {

        setInput(passedInput)
        setOutput(passedOutput)
        setLesson(lesson)
        setAnswer(null)

     }
     //dummy input and output


  return (
    <div className="main-content">
      <Instructions className='instructions-content' getInput={handleInput}/>
      <UserInput className='userinput-content' handleCode={handleCode} loading={loading}/>
      <UserOutput className='useroutput-content' lesson={lesson} loading={loading} output={answer} />
    </div>
  );
};

export default Main;
