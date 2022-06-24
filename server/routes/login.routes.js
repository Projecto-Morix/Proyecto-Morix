const router = require("express").Router();
const con = require('../database/DBCon');
const bcrypt = require('bcrypt');

router.post('/', (req, res) => {

    const {username, password} = req.body;

    if (!username || !password){

        res.status(400).send('Credenciales inválidas');
    } else{

        con.query(`SELECT * FROM Users WHERE Username = '${username}'`, async (err, rows) => {

            if(rows.length == 0 || !(await bcrypt.compare(password, rows[0].Password))){

                res.status(400).send('Credenciales inválidas');
            } else{

                res.status(200).send();
            };
        });
    };
});

module.exports = router;