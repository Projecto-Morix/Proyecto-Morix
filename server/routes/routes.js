const  router = require("express").Router();
const con = require('./../database/DBCon');
router.get('/', (req,res)=>{
con.connect((err)=>{
if (err)  {res.send('bay');
console.log(err);
} else {
    res.send('hey');
}
})

});

module.exports = router;