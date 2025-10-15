const express = require('express');

const router = express.Router();

// GET /auditlogs/:id
router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Audit log service is reachable',
        request: {
            body: req.body,
            query: req.query,
            params: req.params,
            headers: req.headers
        }
    });
});

module.exports = router;