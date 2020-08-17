const Sequelize = require("sequelize");
var dbname = "todolist";//database name
var user = "";// username, ex: root
var password = "";// password

const connection = new Sequelize(dbname, user, password,{
    host: "localhost",
    dialect: "mysql",
    timezone: "-03:00"
});

module.exports = connection;