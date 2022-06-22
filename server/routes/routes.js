const  router = require("express").Router();
const con = require('./../database/DBCon');

router.get('/', (req, res)=>{
    con.connect((err)=>{
        if (err) {
            res.send('bay');
        } else {
            res.send('hey');
        };
    });
});

router.get('/catalog', (req, res) => {

    con.query('SELECT * FROM Eventos', (err, result) => {

        if (err) throw err;

        res.send(result);
    });
});

router.post('/register', (req, res) => {

    let userData = req.body;

    con.query(`INSERT INTO Usuarios VALUES`)
});

module.exports = router;