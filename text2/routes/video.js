var express = require('express');
var router = express.Router();
var db=require('../models/db');

/* GET home page. */
router.get('/', function(req, res) {
    let sql="SELECT * FROM `display`"
    console.log(sql);
   // db.query(sql,function (err,rows) {
        res.render('video');
    //})
});
router.post('/',function (req,res){
    let sql="SELECT * FROM `display`limit ? , ?"
    let page=req.body.page;
    let line=req.body.line;
    db.query(sql,[page,line],function (rows) {
        res.json(rows);
    })
})
module.exports = router;