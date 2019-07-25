import React, {useEffect,useRef} from 'react';
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

   const nameRef = useRef(null);
  
  
  

  useEffect(()=>  {
    context= nameRef.current.getContext('2d');
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
    
   
  },[props.output])
  return (
    <div> Output<div ><canvas ref={nameRef} width="300" height="300">
    </canvas> </div>
      <p>{props.output ? props.output[0].stdout: null}</p>
    </div>
  );
};

export default UserOutput;
