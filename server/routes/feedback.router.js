const router = require('express').Router();

// const Pool = pg.Pool; // capital "P" means its a class or constructor
// const pg = require('pg');
const pool = require('../modules/pool');

router.get('/', (req, res) =>{
    pool.query(`SELECT * FROM "feedback"`)
    .then((results) => {
        res.send(results.rows);
    })
    .catch((error) => {
        ('error with GET', error);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    console.log('POST /feedback', req.body);
    const feedback = req.body;
   pool.query(`INSERT INTO "feedback" ("Feeling", "Comprehension", "Support", "Comments") 
   VALUES ($1, $2, $3, $4);`, [feedback.Feeling, feedback.Content, feedback.Support, feedback.Comments])
        .then((results) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error making feedback insert query', error);
            res.sendStatus(500);
        });
});

module.exports = router;