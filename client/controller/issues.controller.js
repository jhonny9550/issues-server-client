const apiService = require('../service/api.service');

// Create issue CRUD handlers

const getIssues = () => {
    return apiService.makeRequest('GET');
}

const getIssueById = (id) => {
    return apiService.makeRequest('GET', id);
}

const createIssue = (body) => {
    return apiService.makeRequest('POST', null, body);
}

const updateIssue = (id, body) => {
    return apiService.makeRequest('PATCH', id, body);
}

const deleteIssue = (id) => {
    return apiService.makeRequest('DELETE', id);
}

module.exports = { getIssues, getIssueById, createIssue, deleteIssue, updateIssue };