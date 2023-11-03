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

// GET search results
router.get('/search', (req, res) => {

    let queryText = `SELECT * FROM "todo" WHERE "task" ILIKE $1 ORDER BY "id" ASC;`;
    pool.query(queryText, [`%${req.query.q}%`])
        .then(result => {
            console.log();
            res.send(result.rows);
        })
        .catch(error => {
            console.error('Error in GET /todo/search', error);
            res.sendStatus(500);
        });

});

// GET sorted results
router.get('/sortedResults', (req, res) => {

    console.log(req.query.sort);
    console.log(req.query.sort.includes('-'));
    let queryText;
    if (req.query.sort.includes('-')) {
        console.log('hi');
        queryText = `SELECT * FROM "todo" ORDER BY "${req.query.sort.split('-')[0]}" ${req.query.sort.split('-')[1]};`
        console.log(queryText);
    } else {
        console.log('hello');
        queryText = `SELECT * FROM "todo" ORDER BY "${req.query.sort}";`
    }
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.error(error);
            res.sendStatus(500);
        });

});

// POST
router.post('/', (req, res) => {

    console.log(req.body.priority);

    let queryText = `
    INSERT INTO "todo" ("task", "dueDate", "priority")
    VALUES ($1, $2, $3);
    `;

    if (req.body.priority === 'None') {
        pool.query(queryText, [req.body.task, req.body.dueDate, null])
            .then(response => {
                res.sendStatus(200);
            })
            .catch(error => {
                console.error(error);
                res.sendStatus(500);
            });
    } else {
        pool.query(queryText, [req.body.task, req.body.dueDate, req.body.priority])
            .then(response => {
                res.sendStatus(200);
            })
            .catch(error => {
                console.error(error);
                res.sendStatus(500);
            });
    }

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

// POST request for click-to-edit functionality
router.post('/:id', (req, res) => {

    let queryText = `
    UPDATE "todo" SET "task" = $1 WHERE "id" = $2;
    `;
    pool.query(queryText, [req.body.task, req.params.id])
        .then(response => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.error(error);
            res.sendStatus(500);
        });

});

// POST request to update due date on user edit
router.post('/update-due-date/:id', (req, res) => {

    console.log(req.body.dueDate);

    let queryText = `
    UPDATE "todo" SET "dueDate" = $1 WHERE "id" = $2;
    `;
    pool.query(queryText, [req.body.dueDate, req.params.id])
        .then(response => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.error(error);
            res.sendStatus(500);
        });

});

// POST request to update due date on user edit
router.post('/update-priority/:id', (req, res) => {

    console.log(req.body.priority);

    let queryText = `
    UPDATE "todo" SET "priority" = $1 WHERE "id" = $2;
    `;

    if (req.body.priority === 'None') {
        pool.query(queryText, [null, req.params.id])
            .then(response => {
                res.sendStatus(200);
            })
            .catch(error => {
                console.error(error);
                res.sendStatus(500);
            });
    } else {
        pool.query(queryText, [req.body.priority, req.params.id])
            .then(response => {
                res.sendStatus(200);
            })
            .catch(error => {
                console.error(error);
                res.sendStatus(500);
            });
    }


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
