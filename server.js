// NodeJS expample without using Express

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/health' && req.method === 'GET') {
//       // Health API
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ status: 'ok' }));
    


//     } else {
//       res.writeHead(404, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ error: 'Not found' }));
//     }
//   });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


// NodeJS example using Express

var express = require('express');
var app = express();

const PORT = 3000;
global.__basedir = __dirname;

var indexRouter = require('./src/routes/index');
app.use('/', indexRouter);

const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

app.listen(PORT, async() => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;