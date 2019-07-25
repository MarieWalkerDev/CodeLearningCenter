const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getInstructions', (req,res) => {
    const instructions = [
      {
        "lesson": "Why React?",
        "description": "React.js is a JavaScript library. It was developed by engineers at Facebook. Here are just a few of the reasons why people choose to program with React: React is fast. Apps made in React can handle complex updates and still feel quick and responsive. React is modular. Instead of writing large, dense files of code, you can write many smaller, reusable files. React’s modularity can be a beautiful solution to JavaScript’s maintainability problems. React is scalable. Large programs that display a lot of changing data are where React performs best. The Codecademy React courses are not a high-level overview. They are a deep dive. Take your time! By the end, you will be ready to program in React with a real understanding of what you’re doing."
      },
      {
        "lesson": "Hello World",
        "description": "What kind of weird hybrid code is that? Is it JavaScript? HTML? Or something else? It seems like it must be JavaScript, since it starts with const and ends with ;. If you tried to run that in an HTML file, it wouldn’t work. However, the code also contains <h1>Hello world</h1>, which looks exactly like HTML. That part wouldn’t work if you tried to run it in a JavaScript file. What’s going on?"
      },
      {
        "lesson": "The Mystery, Revealed",
        "description": "Good! Take another look at the line of code that you wrote. Does this code belong in a JavaScript file, an HTML file, or somewhere else? The answer is…a JavaScript file! Despite what it looks like, your code doesn’t actually contain any HTML at all. The part that looks like HTML, <h1>Hello world</h1>, is something called JSX. Click Next to learn about JSX."
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
