// Load the Path module
const path = require('path');

//Load the Express module
const express = require('express');

//Load the Handle Bars module
const hbs = require('hbs');

const partialPath = path.join(__dirname, 'views/partial');

hbs.registerPartials(partialPath);

//Initialize the app from the express module
const app = express();

//Load the public directory containing css, images and front-end JS
const publicAsset = path.join(__dirname, 'public');

app.use(express.static(publicAsset));

//
const viewPath = path.join(__dirname, 'views/full');
app.set('views', viewPath);

//
app.set('view engine', 'hbs')

//Getting assets created in the app
app.get('', (req, res) => {
    res.send("Load my Man!")

});

app.get('/motionchart', (req, res) => {
    res.send("Motion chart")

});

app.get('/dashboard', (req, res) => {
    res.send("Dashboard")

});

app.get('/about', (req, res) => {
    res.send("About")

});

//Assigning the port number
const port = process.env.PORT || 3000;

//Listen function to identify if the server is running and on which of the ports
app.listen(port, () => {

    console.log('Server is up on port ' + port);

});