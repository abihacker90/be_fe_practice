const express = require('express');
const path = require('path');

const server = express();
server.use('/pub', express.static(path.join(__dirname, '../frontend/pub/')));

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html')
       
    );
});

server.post('/', (req, res) => {
    
    res.send("Welcome")
  });
  

 
const port = 6789;
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
