const router = require("express").Router();
const con = require('./../database/DBCon');
const Auth = require('./../auth');
router.get('/', (req, res) => {

    con.connect((err)=>{
        if (err) {
            res.send('bay');
        } else {
            res.send('hey');
        };
    });
});

router.post('/auth', Auth(), (req, res) => {

    console.log('route ');
   // console.log(req.body);
    console.log(req.body.IsPatrocinador);
    const query = req.body.IsPatrocinador ? 'SELECT * FROM V_Patrocinadores' : 'SELECT * FROM Usuarios' + ' where ID_Usuario=' + req.body.UserData.id;
    con.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send({err: 'db Error'});
            return;
        }
        console.log(rows);
        res.status(200).send({ auth: true, token: req.body.token, IsPatrocinador: req.body.IsPatrocinador ,UserData: rows[0] });
    });
});

const catalog = require('./catalog.routes.js');
router.use('/catalog', catalog);

const register = require('./register.routes.js');
router.use('/register', register);

const login = require('./login.routes.js');
router.use('/login', login);

const event = require('./event.routes.js');
router.use('/add-event', event);

const patrocinador = require('./patrocinador.routes.js');
router.use('/patrocinador', patrocinador);

module.exports = router;