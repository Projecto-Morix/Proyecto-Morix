const router = require("express").Router();
const con = require('../database/DBCon');

router.get('/', (req, res) => {

    con.query('SELECT ID_Evento, Nombre, Locacion, Fecha_Evento, Imagenes FROM Eventos', (err, result) => {

        if (err) throw err;
        res.send(result);
    });
});

router.get('/:id', (req, res) => {
// if (IsNan(Number(req.params.id))) {  console.log("bay/"+req.params.id); return res.status(400).send('Invalid ID, Must be a number'); }
    con.query('SELECT * FROM Eventos where ID_Evento='+req.params.id, (err, result) => {

        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;