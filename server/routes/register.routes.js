const router = require("express").Router();
const con = require('../database/DBCon');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {

    const userData = req.body;
    if (!userData.nombre || !userData.apellido || !userData.password || !userData.email || !userData.telefono || !userData.fecha){

        const EmailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        const PaswRegex = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm;

        if (EmailRegex.test(userData.email) && PaswRegex.test(userData.password)){

            res.status(400).json({              
                err: "El formato de los datos es incorrecto"
            });

            return;
        }

        res.status(400).send({ err:'Datos ingresados erronos, favor de verificar' });
        return;
    } 

    let passEncrypt = await bcrypt.hash(userData.password, 10);
    // normalize  userData.fecha for mysql date format
    userData.fecha= new Date(userData.fecha).toISOString().substring(0, 10);

    con.query(`INSERT INTO Usuarios VALUES(null, '${userData.nombre}', '${userData.apellido}', '${passEncrypt}', '${userData.email}', '${userData.telefono}', '${userData.fecha}', null, false)`, (err, result) => {
        
        if (err) {
            console.log(err); 
            res.status(400).send({ err: err });
            return;
        };
        
        res.send({ id: result.insertId });
    });
});

module.exports = router;