import React, {useEffect,useRef} from 'react';
import "./Output.css"
var context;
var x=100;
var y=100;
var dx=5;
var dy=5;

function draw()
{
  context.clearRect(0,0, 300,300);
  context.beginPath();
  context.fillStyle="#0000ff";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  context.arc(x,y,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();
  // Boundary Logic
if( x<0 || x>300) dx=-dx; 
if( y<0 || y>300) dy=-dy; 
x+=dx; 
y+=dy;
}
function draw12()
{
  function wait(){
    setTimeout(()=>{ context.beginPath();
      context.fillStyle="#0000ff";
      // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
      context.arc(x,y,20,0,Math.PI*2,true);
      context.closePath();
      context.fill();
      // Boundary Logic
    x=Math.ceil(Math.random()*300 )
    x=Math.ceil(Math.random()*300 )
    x+=dx; 
    y+=dy;},2000)
  }
  for(let i=0; i<13; i++){
wait();
}}
const UserOutput = (props) => {
console.log(props.output)
   const nameRef = useRef(null);
  
  
  

  useEffect(()=>  {
    context= nameRef.current.getContext('2d');
    switch( props.lesson){
    case 1:
    
      context.font = "30px Comic Sans MS";
      context.fillStyle="red";
      context.textAlign ="center";
      if(!props.output){ 
       
      context.clearRect(0,0, 300,300);
      context.beginPath();
      context.fillText("Code Learning ", 100,100)}
    else {
      if(props.output[0].status.description==="Accepted"){
      context.clearRect(0,0, 300,300);
      context.beginPath();
     
    context.fillText("Hello World \n Good Job", 100,100)
      }
    }
    break;
    case 2:
    context.clearRect(0,0, 300,300);
    context.beginPath();
  context.fillStyle="#0000ff";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  context.arc(x,y,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();
    if(props.output){
      if(props.output[0].status.description==="Accepted")
     {var t=setInterval(draw,10); 
      setTimeout(()=>clearInterval(t),5000)}
      else alert('Try again')
    }
    else{
       // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  context.arc(x,y,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();
    }
  
  break;
  case 3: 
  context.clearRect(0,0, 300,300);
  context.beginPath();
context.fillStyle="#0000ff";
// Draws a circle of radius 20 at the coordinates 100,100 on the canvas
context.arc(x,y,20,0,Math.PI*2,true);
context.closePath();
context.fill();
    if(!props.output){ 
     
    context.clearRect(0,0, 300,300);
    context.beginPath();
    context.fillText("I Love JavaScript", 150,150)}
  else {              
    if(props.output[0].status.description==="Accepted"){
      context.clearRect(0,0, 300,300);
      context.beginPath();
      context.fillText("12 is correct", 150,150)
      draw12()
    }
  }
  break;
  default:{
    
    context.clearRect(0,0, 300,300);
    context.beginPath();
  context.fillStyle="#0000ff";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  context.arc(x,y,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();
    if(props.output){
      if(props.output[0].status.description==="Accepted")
      setInterval(draw,10);
      else alert('Try again')
    }
    else{
       // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  context.arc(x,y,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();
    }
  }
  }
  
   
  },[props.output, props.lesson])
  return (
    <div className="output-container"> <div ><canvas ref={nameRef} width="300" height="300">
    </canvas> </div > <div className="output-card"><h2>Program Output</h2>
      <h1>{props.loading ? "LOADING..." : null}</h1>
      <p>{props.output ? props.output[0].stdout: null}</p>
      <p>{props.output ? props.output[0].stderr: null}</p>
      </div>
      
    </div>
  );
};

export default UserOutput;
