var express = require('express');
var router = express.Router();
var db=require('../models/db');

/* GET home page. */
router.get('/',function (req, resp) {
    resp.render('regedit',{});
});
router.post('/',function (req, resp) {
    let userName = req.body.userName;
    let passWord = req.body.passWord;
    let sql = "SELECT * FROM `users` where name = ? ";
    db.query(sql,[userName],function (rows) {
        console.log(rows);
        if(rows != null && rows.length > 0){
            req.flash("err","邮箱已存在");
            resp.redirect('regedit');
        }else{
            let inster_sql="insert into users(name,password) values (?,?)"
            db.query(inster_sql,[userName,passWord],function (rows) {
                console.log(rows);
                resp.redirect('login');

            })
        }
    });
});

module.exports = router;