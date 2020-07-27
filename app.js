// Load the Path module
const path = require('path');

//Load the Express module
const express = require('express');

//Initialize the app from the express module
const app = express();

//Load the public directory containing css, images and front-end JS
const publicAsset = path.join(__dirname, 'public');

app.use(express.static(publicAsset));


//Assigning the port number
const port = process.env.PORT || 3000;

//Listen function to identify if the server is running and on which of the ports
app.listen(port, () => {

    console.log('Server is up on port ' + port);

});