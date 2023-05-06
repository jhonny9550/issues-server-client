const getIssues = (req, res) => {
    res.status(200).json([]);
};
const getIssueById = (req, res) => {
    res.status(200).json({});
};
const createIssue = (req, res) => {
    res.status(200).json({});
};
const deleteIssue = (req, res) => {
    res.status(200).json({ id: req.params.id });
};
const updateIssue = (req, res) => {
    res.status(200).json({});
};

module.exports = {
    getIssues,
    getIssueById,
    createIssue,
    deleteIssue,
    updateIssue
}
