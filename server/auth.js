const con = require('./database/DBCon');
const jwt = require('jsonwebtoken');

module.exports =  () =>  {
    return(req, res, next) =>{

     
   if (req.body.token === null){ 
        return; 
    }
    jwt.verify(req.body.token, process.env.JWT_SECRET,(err, decoded)=>{
        if (err) {
            
            return res.status(401).send({ auth: false, token: null });
        }
        const Id= decoded.payload.id;
        con.query(`SELECT IsPatrocinador FROM Usuarios WHERE ID_Usuario = '${Id}'`, (err, rows) => {
        
            if (err) {
                
                return  res.status(500).send({err: 'db Error'});
            }
            req.body.IsPatrocinador = rows[0].IsPatrocinador;
            next();
        });
    });
}
};
