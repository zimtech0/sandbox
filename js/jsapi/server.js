// should read from .env file(s)
require('dotenv').config();
const express = require('express');

const app =express();
const port = process.env.PORT || 3000;

//Set public fldr as root
app.use(express.static('public'));

//front end access to node_mod fldr
app.use('/scripts',express.static('${__dirname}/node_modules/'));

//Listen for HTTTP request on port 3000
app.listen(port,() => {
    console.log('listening on %d', port);
});