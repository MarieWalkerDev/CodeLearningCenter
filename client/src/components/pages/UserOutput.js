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
    //   if(props.output.status.description==="Accepted"){
    //   context.clearRect(0,0, 300,300);
    //   context.beginPath();
     
    // context.fillText("Hello World ", 100,100)
    //   }
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
      setInterval(draw,10);
    }
  
  break;
  default: {
    
    context.font = "30px Comic Sans MS";
    context.fillStyle="red";
    context.textAlign ="center";
    if(!props.output){ 
     
    context.clearRect(0,0, 300,300);
    context.beginPath();
    context.fillText("I Love JavaScript", 100,100)}
  else {              
    if(props.output.status.description==="Accepted"){
    context.clearRect(0,0, 300,300);
    context.beginPath();
   
  context.fillText("Congratulations ", 100,100)
    }
  }
  }
  }
   
  },[props.output, props.lesson])
  return (
    <div className="output-container"> <div ><canvas ref={nameRef} width="300" height="300">
    </canvas> </div > <div className="output-card"><h2>Program Output</h2>
      <p>{props.output ? props.output[0].stdout: null}</p></div>
      <p>{props.output ? props.output[0].stderr: null}</p>
    </div>
  );
};

export default UserOutput;
