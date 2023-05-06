const IssuesRouter = require('express').Router();
const issuesController = require('../controllers/issues.controller');

IssuesRouter.get('/', issuesController.getIssues);
IssuesRouter.get('/:id', issuesController.getIssueById);
IssuesRouter.post('/', issuesController.createIssue);
IssuesRouter.patch('/:id', issuesController.updateIssue);
IssuesRouter.delete('/:id', issuesController.deleteIssue);

module.exports = IssuesRouter;
