const Mysql = require('Mysql2');
const Con = Mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2005',
    database: 'Boleteria'
});

export default Con;