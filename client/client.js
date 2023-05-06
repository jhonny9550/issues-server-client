const yargs = require('yargs');
const issuesController = require('./controller/issues.controller');

yargs
    .scriptName("issuescli")
    .usage('$0 <cmd> [args]')
    .command('list', 'Get the list of issues', async function () {
        const issues = await issuesController.getIssues();
        console.log(issues);
    })
    .command('get [id]', 'Get issue by id', () => { }, async function (argv) {
        const issue = await issuesController.getIssueById(argv.id);
        console.log(issue);
    })
    .command('create [body]', 'Create issue', () => { }, async function (argv) {
        const issueData = JSON.parse(argv.body);
        const issue = await issuesController.createIssue(issueData);
        console.log(issue);
    })
    .command('update [id] [body]', 'Update issue', () => { }, async function (argv) {
        const issueData = JSON.parse(argv.body);
        const issue = await issuesController.updateIssue(argv.id, issueData);
        console.log(issue);
    })
    .command('delete [id]', 'Delete issue', () => { }, async function (argv) {
        const issue = await issuesController.deleteIssue(argv.id);
        console.log(issue);
    })
    .help()
    .argv
