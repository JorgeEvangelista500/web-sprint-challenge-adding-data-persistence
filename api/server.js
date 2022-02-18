// build your server here and require it from index.js
const express = require('express')

const projectsRouter = require('./project/router')
const tasksRouter = require('./task/router')
const resourcesRouter = require('./resource/router')

const server = express();

server.use(express.json())

server.use('/api/projects', projectsRouter)
server.use('/api/tasks', tasksRouter)
server.use('/api/resources', resourcesRouter)


server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = server;