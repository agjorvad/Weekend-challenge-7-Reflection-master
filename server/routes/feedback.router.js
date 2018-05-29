const router = require('express').Router();
const pool = require('../modules/pool');

// Get request for rows in database
router.get('/', (req, res) =>{
    pool.query(`SELECT * FROM "feedback"
ORDER BY "id" DESC`)
    .then((results) => {
        res.send(results.rows);
    })
    .catch((error) => {
        ('error with GET', error);
        res.sendStatus(500);
    })
});

// Form submission
router.post('/', (req, res) => {
    console.log('POST /feedback', req.body);
    const feedback = req.body;
   pool.query(`INSERT INTO "feedback" ("feeling", "comprehension", "support", "comments") 
   VALUES ($1, $2, $3, $4);`, [feedback.feeling, feedback.content, feedback.support, feedback.comments])
        .then((results) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error making feedback insert query', error);
            res.sendStatus(500);
        });
});

// Delete feedback entry
router.delete('/:id', (req, res) => {
    console.log(req.params);
    const feedback_id = req.params.id;
    console.log(feedback_id);
    pool.query(`DELETE FROM "feedback"
                        WHERE "id" = ($1);`, [feedback_id])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('problem with DELETE from database', error);
            res.sendStatus(500);
        });
});

module.exports = router;