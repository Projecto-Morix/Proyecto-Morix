const con = require('./database/DBCon');
const jwt = require('jsonwebtoken');

exports.Autenticado = async (req, res, next) => {

    if(req.body.token == null){ 

        next(); return; 
    }

    console.log(jwt.verify(req.body.token, process.env.JWT_SECRET));
    if(jwt.verify(req.body.token, process.env.JWT_SECRET)){}

    con.query(`SELECT IsPatrocinador FROM Usuarios WHERE ID_Usuarios = '${id}'`, (err, rows) => {

        if (err) throw err;
        req.body.IsPatrocinador = rows.IsPatrocinador;
        next();
    });

    return;

    next();
};