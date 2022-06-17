const Mysql = require('Mysql2');
const Con = Mysql.createConnection({
    host: process.env.DbHost,
    user: process.env.DbUser,
    password: process.env.DbPass,
    database: 'Boleteria'
});

module.exports=Con;