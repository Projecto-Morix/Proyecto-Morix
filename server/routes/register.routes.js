const router = require("express").Router();
const con = require('../database/DBCon');
const bcryptjs = require('bcryptjs');

router.post('/', (req, res) => {

    const userData = req.body;

    if (!userData.nombre || !userData.apellido || !userData.password || !userData.email || !userData.telefono || !userData.fecha || !userData.imagen){

        res.status(400).send('Faltan datos');
    } else{

        let passEncrypt = await bcryptjs.hash(userData.password, 10);

        con.query(`INSERT INTO Usuarios VALUES(null, '${userData.nombre}', '${userData.apellido}', ${passEncrypt}, '${userData.email}', '${userData.telefono}', ${userData.fecha}, ${userData.imagen})`, (err, result) => {
            
            if (err) {
                console.log(err); 
                res.status(400).send();
            };
    
            res.send(result);
        });
    };
});

module.exports = router;