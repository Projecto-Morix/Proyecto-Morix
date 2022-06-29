const con = require('./database/DBCon');
const jwt = require('jsonwebtoken');

module.exports =  () =>  {
    return(req, res, next) =>{

        console.log('first middleware');
        console.log(req.body);
    console.log('checando');
   if (req.body.token === null){ 
        return; 
    }
    jwt.verify(req.body.token, process.env.JWT_SECRET,(err, decoded)=>{
        if (err) {
            console.log('token e falso');
            return res.status(401).send({ auth: false, token: null });
        }
        const Id= decoded.payload.id;
        con.query(`SELECT IsPatrocinador FROM Usuarios WHERE ID_Usuario = '${Id}'`, (err, rows) => {
        
            if (err) {
                console.log(err)
                return  res.status(500).send({err: 'db Error'});
            }
            console.log(rows);
            req.body.IsPatrocinador = rows[0].IsPatrocinador;
            next();
        });
    });
}
};
