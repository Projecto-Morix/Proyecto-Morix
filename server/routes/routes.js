const router = require("express").Router();
const con = require('./../database/DBCon');

router.get('/', (req, res)=>{
    con.connect((err)=>{
        if (err) {
            res.send('bay');
        } else {
            res.send('hey');
        };
    });
});

const catalog = require('./catalog.routes.js');
router.use('/catalog', catalog);

const register = require('./register.routes.js');
router.use('/register', register);

const login = require('./login.routes.js');
router.use('/login', login);

module.exports = router;