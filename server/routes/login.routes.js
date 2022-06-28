const router = require("express").Router();
const con = require('../database/DBCon');
const bcrypt = require('bcrypt');

router.post('/', (req, res) => {

    const {username, password} = req.body;

    if (!Email || !password) {      
        res.status(400).send({ auth: false, err: 'Credenciales incompletas' });
        return;
    }

    con.query(`SELECT * FROM Usuarios WHERE Email = '${Email}'`, async (err, rows) => {
        
        if (err) {
            res.status(500).send({ err:err });
            return;
        }

        const result = await bcrypt.compare(password, rows[0].PassHash);
        if (!result) {
            res.status(401).send({ auth: false, err: 'Credenciales inválidas' });
            return; 
        } 
        //req.session.user = rows[0];
        const id = rows[0].Id;
        rows[0].PassHash = null;
        jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {

            if (err) {               
                res.status(500).send({ auth: false, err: 'Error al generar el token' });
                return;
            }

            res.status(200).send({ auth: true, token: token, UserData: rows[0] });       
        });
    });
});

module.exports = router;