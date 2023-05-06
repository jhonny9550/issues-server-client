const express = require('express');
const IssuesRouter = require('./issues.router');

const AppRouter = express.Router();

AppRouter.use('/issues', IssuesRouter);

module.exports = AppRouter;
