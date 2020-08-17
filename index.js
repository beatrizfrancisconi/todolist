const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
//Models
const Tasks = require("./model/Tasks");

//Controllers
const TasksController = require("./controller/TasksController");

//Database
connection.authenticate().then( () =>{
    console.log("Conexão com banco de dados feita com sucesso");
}).catch( err => {
    console.log(err);
});

//View Engine
app.set('view engine', 'ejs');

//Body parser
app.use(bodyParser.urlencoded({extendeds:false}));
app.use(bodyParser.json());

//Setting public static files
app.use(express.static('public'));

//Using Controllers
app.use("/", TasksController);

//Index route
app.get('/', (req, res) =>{
    Tasks.findAll({
        order:[
            ['id', 'DESC']
        ]
    }).then(tasks =>{
        res.render("index", {tasks: tasks});
    }).catch( err => {
        res.redirect('/');
    });
});



app.listen(8080, () => {
    console.log("O servidor está rodando!");
});