// routes/issues.js

const express = require('express');
const router = express.Router();
const Issue = require('../models/Issue');

// @route GET api/issues
// @desc Get all issues
router.get('/', async (req, res) => {
    try {
        const issues = await Issue.find();
        res.json(issues);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route POST api/issues
// @desc Create an issue
router.post('/', async (req, res) => {
    const { issueName, issueDescription, issueStatus } = req.body;

    try {
        const newIssue = new Issue({
            issueName,
            issueDescription,
            issueStatus
        });

        const issue = await newIssue.save();

        res.json(issue);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route EDIT api/issues/:id
// @desc Edit an issue
router.put('/:id', async (req, res) => {
    const { issueName, issueDescription, issueStatus } = req.body;

    // Build issue object
    const issueFields = {};
    if (issueName) issueFields.issueName = issueName;
    if (issueDescription) issueFields.issueDescription = issueDescription;
    if (issueStatus) issueFields.issueStatus = issueStatus;

    try {
        let issue = await Issue.findById(req.params.id);

        if (!issue) return res.status(404).json({ msg: 'Issue not found' });

        issue = await Issue.findByIdAndUpdate(
            req.params.id,
            { $set: issueFields },
            { new: true }
        );

        res.json(issue);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;