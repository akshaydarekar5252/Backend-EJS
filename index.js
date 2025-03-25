const express = require('express');
const app = express();
const path = require('path');


const port = 3000;

app.set ('view engine', 'ejs');

app.set("views", path.join(__dirname, "/views"));

app.get("/",(req,res )=>{
    res.render("home.ejs");
});

// instagram EJS 

app.get("/ig/:username",(req,res )=>{
    let {username}= req.params;
    const instaData = require("./data.json");
    const data = instaData[username]
    console.log(data);

    res.render("instagram.ejs",{data});
});








app.get("/hello",(req,res )=>{
    res.send("hello");
});

app.get("/rolldice",(req,res )=>{
    let diceVal  =  Math.floor(Math.random()*6)+1 ; // the data  from database 
    res.render("rolldice.ejs", {num: diceVal});
});

app.listen(port, () => {
    console.log("listening on port " + port);
});