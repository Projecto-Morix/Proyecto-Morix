const router = require("express").Router();
const con = require('../database/DBCon');

router.post('/', (req, res) => {

    let userData = req.body;

    con.query(`INSERT INTO Usuarios VALUES(null, '${userData.nombre}', '${userData.apellido}', ${userData.password}, '${userData.email}', '${userData.telefono}', ${userData.fecha}, ${userData.imagen})`, (err, result) => {
            
        if (err) throw err;

        //res.send(result);
    });
});

module.exports = router;