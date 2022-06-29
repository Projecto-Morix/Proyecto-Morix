const router = require("express").Router();
const con = require('../database/DBCon');

router.post('/', async (req, res) => {
    const eventInfo = req.body;
    if (!eventInfo.Nombre || !eventInfo.Tipo || !eventInfo.Patrocinador || !eventInfo.Locacion || !eventInfo.Fecha || !eventInfo.Edad_Min || !eventInfo.Descripcion || !eventInfo.Imagenes){

        res.status(400).send({ err:'Datos ingresados erroneos/faltantes, favor de verificar' });
        return;
    }

    eventInfo.Fecha = new Date(eventInfo.Fecha).toISOString().substring(0, 10);

    con.query(`INSERT INTO Eventos VALUES(null, '${eventInfo.Nombre}', '${eventInfo.Tipo}', '${eventInfo.Patrocinador}', '${eventInfo.Locacion}', '${eventInfo.Fecha}', ${eventInfo.Edad_Min}, '${eventInfo.Descripcion}', '${eventInfo.Imagenes}')`, (err, result) => {
        
        if (err) {
            console.log(err); 
            res.status(400).send({ err: err });
        };
        
        res.send({ id: result.insertId });
    });
});

module.exports = router;