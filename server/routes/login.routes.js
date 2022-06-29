const router = require("express").Router();
const con = require('../database/DBCon');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

router.post('/', (req, res) => {
console.log(req.body);
    const {Email, password} = req.body;

    if (!Email || !password) {      
        res.status(400).send({ auth: false, err: 'Credenciales incompletas' });
        return;
    }

    con.query(`SELECT * FROM Usuarios WHERE Email = '${Email}'`, async (err, rows) => {
        
        if (err) {
            res.status(500).send({ err:err });
            return;
        }
        if (rows.length === 0) {
            res.status(400).send({ auth: false, err: 'Usuario no encontrado' });
            return;
        }
        const result = await bcrypt.compare(password, rows[0].PasHash);
        if (!result) {
            res.status(401).send({ auth: false, err: 'Credenciales inválidas' });
            return; 
        } 
        //req.session.user = rows[0];
        const id = rows[0].Id;
        rows[0].PasHash = null;
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