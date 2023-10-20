const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {

    let queryText = `SELECT * FROM "todo";`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.error('ERROR IN GET /todo', error);
        });

});

// POST

// PUT

// DELETE

module.exports = router;
