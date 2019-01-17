var express = require('express');
var router = express.Router();
var db=require('../models/db');

/* GET home page. */
router.get('/',function (req, resp) {
    resp.render('login',{});
});
router.post('/',function (req, resp) {
    let userName = req.body.userName;
    let passWord = req.body.passWord;
    let login_sql = "SELECT * FROM `users` where name = ? and password = ?";
    db.query(login_sql,[userName,passWord],function (rows) {
        console.log(rows);
        if(rows != null && rows.length > 0){
            //登录成功
            resp.render('indexnew',{});
        }else{
            //登录失败
            req.flash("err", "登录失败");
            resp.redirect('login');
        }
    });
});

module.exports = router;