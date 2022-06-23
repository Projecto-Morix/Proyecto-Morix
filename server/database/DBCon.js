const Mysql = require('Mysql2');

const con = Mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'Boleteria'
});

module.exports = con;