var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {

    var a = Math.floor(Math.random() * 5)
    var b = Math.floor(Math.random() * 5)

    if(req.query.a){
        a = parseInt(req.query.a);
    }
    if(req.query.b){
        b = parseInt(req.query.b);
    }
    let result = Math.pow(a, b)
    console.log(a, b);

    res.send(`Math.pow applied on ${a} and ${b} is ${result}`);
});

module.exports = router;
