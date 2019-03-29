const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const port = 5000;

const projectRouter = require('./projects/project-router.js');
const actionRouter = require('./actions/action-router.js');

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.listen(port, () => {
  console.log(`\n** API running on http://localhost:${port} **\n`);
});