const dataService = require('../services/data.service');

const getIssues = (_, res) => {
    const issues = dataService.getData();
    res.status(200).json(issues);
};

const getIssueById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const issueList = dataService.getData();
    const issue = issueList.find(item => item.id === id);
    if (!issue) {
        return res.status(404).json({ message: `Issue with id ${id} not found` });
    }
    res.status(200).json(issue);
};

const createIssue = (req, res) => {
    const issueData = req.body;
    const issueList = dataService.getData();
    const lastIssue = issueList[issueList.length - 1];
    issueData.id = lastIssue.id + 1;
    issueList.push(issueData);
    dataService.saveData(issueList);
    res.status(200).json(issueList);
};

const deleteIssue = (req, res) => {
    const deleteIssueId = parseInt(req.params.id, 10);
    let issueList = dataService.getData();
    issueList = issueList.filter(item => item.id !== deleteIssueId);
    dataService.saveData(issueList);
    res.status(200).json({ id: deleteIssueId });
};

const updateIssue = (req, res) => {
    const updateIssueId = parseInt(req.params.id, 10);
    const updateIssueData = req.body;
    if (Object.prototype.hasOwnProperty.call(updateIssueData, 'id')) {
        return res.status(400).json({ message: 'Cannot update issue id' });
    }
    const issueList = dataService.getData();
    const issueToUpdateIndex = issueList.findIndex(item => item.id === updateIssueId);
    if (!issueToUpdateIndex) {
        return res.status(404).json({ message: `Issue with id ${updateIssueId} not found.` });
    }
    issueList[issueToUpdateIndex] = { ...issueList[issueToUpdateIndex], ...updateIssueData };
    dataService.saveData(issueList);
    res.status(200).json(issueList[issueToUpdateIndex]);
};

module.exports = {
    getIssues,
    getIssueById,
    createIssue,
    deleteIssue,
    updateIssue
}
