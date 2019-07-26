const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getInstructions', (req,res) => {
    const instructions = [
      {
        "id": 1,
        "lesson": "Console",
        "description": [
          "The console is a panel that displays important messages, like errors, for developers. Much of the work the computer does with our code is invisible to us by default. If we want to see things appear on our screen, we can print, or log, to our console directly.",
          "In JavaScript, the console keyword refers to an object, a collection of data and actions, that we can use in our code. One action, or method, that is built into the console object is the .log() method. When we write console.log() what we put inside the parentheses will get printed, or logged, to the console.",
          "On the right type 'console.log(\"Hello World\")' or 'console.log(\"World\")' to see the value printed to the console."
        ],
        "input": "World",
        "output": "Hello World\n",
      },
      {
        "id": 2,
        "lesson": "Contitionals - if statement",
        "description": [
          "We often perform a task based on a condition. For example, if the weather is nice today, then we will go outside. If the alarm clock rings, then we’ll shut it off. If we’re tired, then we’ll go to sleep.",
          "In programming, we can also perform a task based on a condition using an if statement: 'if (ball === red) { console.log('Red Ball')}' ",
          "In this exercise you have two variables named 'ball' and 'bounce' and if the input is 'bounce' then the ball will 'bounce'. Try it out, enter 'if (line === \"ball\") {console.log(\"bounce\")}'."
        ],
        "input": "ball",
        "output": "bounce\n",
      },
      {
        "id": 3,
        "lesson": "Array Property",
        "description": [
          "The length property of an array returns the length of an array (the number of array elements). The length property is always one more than the highest array index.",
          "Example: let fruits = [\"Banans\", \"Orange\", \"Apple\", \"Mango\"]; console.log(fruites.length); will output 4",
          "The length property treats strings the same as arrays. Try logging \"I Love JavaScript\" with the length property to test this."
        ],
        "input": "I Love JavaScript",
        "output": "17\n",
      },
      {
        "id": 4,
        "lesson": "String Disemvoweling",
        "description": [
          "Your boss says he wants to save space in all your email messages by getting rid of the vowels",
          "Your task is to write a function that takes a string and return a new string with all vowels removed. Use the input in the variable line and output the same string with all the vowels removed"
        ,
          "For example, the string \"This boss is the biggest loser LOL!\" would become \"Ths bss s th bggst lsr LL!\"."
        ],
        "input": "This boss is the biggest loser LOL!",
        "output": "Ths bss s th bggst lsr LL!\n",
      }
    ];
    res.json(instructions);
    console.log('Sent list of instructions!');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'../client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
