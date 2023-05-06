const path = require('path');
const fs = require('fs');

const ISSUES_DATAFILE_PATH = path.join(__dirname, '../db/issues.data.json');

// Save JSON file data
const saveData = (data) => {
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync(ISSUES_DATAFILE_PATH, stringifyData);
}

// Get JSON file Data
const getData = () => {
    const issuesData = fs.readFileSync(ISSUES_DATAFILE_PATH);
    return JSON.parse(issuesData);
}

module.exports = { saveData, getData };
