const express = require('express');

const ResourceRouter = require('./resource/router.js');
const ProjectRouter = require('./project/router');
const TaskRouter = require('./task/router');
const server = express();

server.use(express.json());
server.use('/api/tasks', TaskRouter);
 server.use('/api/projects', ProjectRouter);
 server.use('/api/resources', ResourceRouter);

module.exports = server;