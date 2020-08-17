const connection = require("../database/database");
const Sequelize = require("sequelize");
const Tasks = connection.define("Tasks", {
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    name:{
        type:Sequelize.STRING,
        allowNull: false
    }

    });

//Tasks.sync({force:true});
module.exports = Tasks;