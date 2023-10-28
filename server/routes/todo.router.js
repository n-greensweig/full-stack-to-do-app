const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {

    let queryText = `SELECT * FROM "todo" ORDER BY "id" ASC;`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.error('ERROR IN GET /todo', error);
        });

});

// POST
router.post('/', (req, res) => {

    let queryText = `
    INSERT INTO "todo" ("task", "dueDate", "priority")
    VALUES ($1, $2, $3);
    `;
    pool.query(queryText, [req.body.task, req.body.dueDate, req.body.priority])
        .then(response => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.error(error);
            res.sendStatus(500);
        });

});

// PUT
router.put('/:id', (req, res) => {

    let queryText = `
    UPDATE "todo" SET "completed" = NOT "completed" WHERE "id" = $1;
    `;
    pool.query(queryText, [req.params.id])
        .then(response => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.error(error);
            res.sendStatus(500);
        });

});

// DELETE
router.delete('/:id', (req, res) => {

    let queryText = `
    DELETE FROM "todo" where "id" = $1;
    `;
    pool.query(queryText, [req.params.id])
        .then(response => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.error(error);
            res.sendStatus(500);
        })

});

module.exports = router;
