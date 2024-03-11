const express = require("express")
const app = express()

const handlebars = require("express-handlebars").engine

var porta = 8081

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/", function(req, res){
    res.render("primeira_pagina")
})

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})
