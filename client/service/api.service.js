const SERVER_URL = 'http://localhost';
const SERVER_PORT = 3000;
const ISSUES_ENDPOINT = 'issues';

// Handle HTTP request
const makeRequest = (method, id, body) => {
    console.log(JSON.stringify(body));
    let url = `${SERVER_URL}:${SERVER_PORT}/${ISSUES_ENDPOINT}`;
    if (id) {
        url = `${url}/${id}`;
    }
    return fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

module.exports = { makeRequest };
