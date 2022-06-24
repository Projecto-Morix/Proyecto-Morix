const router = require("express").Router();
const con = require('../database/DBCon');
const bcryptjs = require('bcryptjs');

router.post('/', (req, res) => {

    const {username, password} = req.body;

    if (!username || !password){

        res.status(400).send('Credenciales inválidas');
    } else{

        con.query(`SELECT * FROM Users WHERE Username = '${username}'`, async (err, rows) => {

            if(rows.length == 0 || !(await bcryptjs.compare(password, rows[0].Password))){

                res.status(400).send('Credenciales inválidas');
            } else{

                res.status(200).send();
            };
        });
    };
});

module.exports = router;