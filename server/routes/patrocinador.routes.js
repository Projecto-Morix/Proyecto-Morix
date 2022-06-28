const router = require("express").Router();
const con = require('../database/DBCon');

router.post('/', async (req, res) => {

    const patronData = req.body;
    if (!patronData.Usuario || !patronData.Cedula || !patronData.Ubicacion){

        res.status(400).send({ err:'Datos ingresados erroneos/faltantes, favor de verificar' });
        return;
    }

    con.query(`SELECT * FROM Usuarios WHERE Nombre = '${patronData.Usuario}'`, (err, rows) => {

        if (err){
            console.log(err);
            res.status(400).send({ err: 'El usuario no está registrado' });
            return;
        }

        con.query(`INSERT INTO Patrocinadores VALUES(null, ${rows.ID_Usuario}, '${patronData.Cedula}', '${patronData.Ubicacion}')`, (err, result) => {
        
            if (err) {
                console.log(err); 
                res.status(400).send({ err: err });
            };
            
            res.send({ id: result.insertId });
        });
    });

    //Lo de verifica si existe el usuario es innecesario ahora que lo veo, ya que el usuario, si va a ser patrocinador, debe estar logueado, pero ahi ta por si acaso :D.
});

module.exports = router;