const express = require('express');

const ResourceRouter = require('./resource/router.js');
const ProjectRouter = require('./project/router');
const server = express();

server.use(express.json());
// server.use('/api/tasks', TaskRouter);
 server.use('/api/projects', ProjectRouter);
 server.use('/api/resources', ResourceRouter);

//catchall so we can start the server proper
// server.get('/', (req, res) => {
//     res.send(`<h2>Let's crush this sprint challenge woo!</h2>`);
//   });

module.exports = server;