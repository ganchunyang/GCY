var mysql = require("mysql");
var db = {};
db.query = function (sql,queryArray, callback) {
    var connect = mysql.createConnection({
        host:"localhost",
        user: "root",
        password: "GAN1996812",
        database:'text',
        port:3306
    });
    connect.connect();
    connect.query(sql,queryArray,function (err,rows,) {
        if(err)console.log(err);
        callback(rows);
    });
    connect.end();
};
module.exports = db;