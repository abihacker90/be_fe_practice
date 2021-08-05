const express = require('express');
const path = require('path');
const server = express();

server.use('/pub', express.static(path.join(__dirname, '../frontend/pub/')));

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html')
    
    );
});
server.use(function (req, res, next) {
    req.headers['content-type'] = 'application/json';
    next();
  });
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(function (req, res, next) {
    //req.headers['content-type'] = 'application/json';
    next();
  });

server.post('/', (req, res) => {
    req.header('Content-Type', 'application/json');
    console.log("body:", req.body.firstName);
});

const port = 7890;
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
