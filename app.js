const express = require('express');
// creating new instance of express server
const app = express();


//make a route for the about page of the website( app.get(): makes route )

// app.get('/', (request,response)=> {
app.get('/', (req, res) => {
    res.send("HomePage!");
});

app.get('/help', (req, res) => {
    res.send("HelpMe!");
});

app.get('/contact', (req, res) => {
    res.send("ContactMe!");
});





// specifies port that server is listening on
app.listen(3000)

// get is used to et information from server
//         git. post.delete. put
// CRUD :create.read.update.destroy

//anonymus function is a function with no name

