const express =require('express');
const bodyParser = require('body-parser');
const app= express();
const path =require('path');
const http = require('http');
// API file for interacting with MongoDB
const api = require('./src/server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
// app.use(express.static(path.join(__dirname, './dist/hanonsystem-ui-new')));
app.use(express.static('./dist/hanonsystem-ui-new'));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/hanonsystem-ui-new/index.html'));
});

//Set Port
const port = process.env.PORT || 8080;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, '0.0.0.0', () => console.log(`Running on localhost:${port}`));