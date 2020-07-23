//Load the Express package
const express = require('express');

//Initialize the app from the express package
const app = express();

//Assigning the port number
const port = process.env.PORT || 3000;

//Listen function to identify if the server is running and on which of the ports
app.listen(port, () => {

    console.log('Server is up on port ' + port);

});