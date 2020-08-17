const express = require("express");
const router = express.Router();
//Model
const Tasks = require("../model/Tasks");

router.post("/add", (req, res) =>{
    var description = req.body.description;
    var name = req.body.name;
    Tasks.create({
        description: description,
        name: name
    }).then( () => {
        res.redirect("/");
    }).catch( err =>{
        console.log(err);
    });
});

router.get("/edit/:id", (req, res) =>{
    var id = req.params.id;
    Tasks.findOne({ where: { id: id}}).then( task => {
        if(task != undefined){
            res.render("edit", {task: task});
            
        }
    }).catch( err => {
        res.render("/");
    });
});

router.post("/update", (req, res) =>{
    var name = req.body.name;
    var description = req.body.description;
    var id = req.body.id;
    Tasks.update({name: name, description: description},{ 
        where:{
            id: id
        }
    }).then( () => {
        res.redirect("/");
    }).catch( err => {
        res.redirect("/");
    });
        
});

router.post("/delete", (req, res) => {
    var id = req.body.id;
    Tasks.findOne({where:{id: id}}).then( task => {
        if(task != undefined){
            Tasks.destroy({where:{id: id}}).then( () => {
                res.redirect("/");
            }).catch( err =>{
                res.redirect("/");
            });
        }
    }).catch( err => {
        res.redirect("/");
    })


});

module.exports = router;