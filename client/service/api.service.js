const SERVER_URL = 'http://localhost';
const SERVER_PORT = 3000;
const ISSUES_ENDPOINT = 'issues';

// Handle HTTP request
const makeRequest = (method, id, body) => {
    let url = `${SERVER_URL}:${SERVER_PORT}/${ISSUES_ENDPOINT}`;
    if (id) {
        url = `${url}/${id}`;
    }
    return fetch(url, {
        method,
        body: JSON.stringify(body)
    }).then(res => res.json())
}

module.exports = { makeRequest };
