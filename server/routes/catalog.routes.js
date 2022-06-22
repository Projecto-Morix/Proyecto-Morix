const router = require("express").Router();
const con = require('../database/DBCon');

router.get('/', (req, res) => {

    con.query('SELECT ID_Evento, Nombre, Locacion, Fecha_Evento, Imagenes FROM Eventos', (err, result) => {

        if (err) throw err;

        res.send(result);
    });
});

module.exports = router;