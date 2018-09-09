const express =require('express');
const bodyParser = require('body-parser');
const app= express();
const path =require('path');
const http = require('http');
// API file for interacting with MongoDB
const api = require('./src/server/routes/api');
const cors = require('cors');
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
// app.use(express.static(path.join(__dirname, './dist/hanonsystem-ui-new')));
app.use(express.static(__dirname+'/dist/hanonsystem-ui-new'));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/hanonsystem-ui-new/index.html'));
});

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  app.use(cors(corsOptions));
  
//Set Port
const port = process.env.PORT || 8080;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, '0.0.0.0', () => console.log(`Running on localhost:${port}`));