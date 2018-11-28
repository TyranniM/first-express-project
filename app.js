const express = require('express');
// creating new instance of express server
const app = express();

// app.get('/', (request,response)=> {
app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/about', (req, res) => {
    res.send("Hello World!");
});


//make a route for the about page of the website



// specifies port that server is listening on
app.listen(3000)

// get is used to et information from server
//         git. post.delete. put
// CRUD :create.read.update.destroy

//anonymus function is a function with no name

