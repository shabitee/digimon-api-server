"use strict";

const express = require("express");
require("dotenv").config();
const superagent = require("superagent");

const PORT = process.env.PORT;



const app = express();






app.get("/", (req, res) =>{
    res.send('Welcome to digimon');
});



app.get("/alldigimon",(req,res) =>{
    const url = "https://digimon-api.vercel.app/api/digimon";
    superagent
      .get(url)
      .then((digiData) =>{
        console.log(digiData.body);
        const digiArr = digiData.body.map((digi)=>digi);
        res.status(200).send({digiArr});
    })
    .catch((error) =>{
        res.status(404).send(`Not found ${error}`);
    });

})


class Digimon{
    constructor(digi){
        this.name = digi.name;
        this.image= digi.image;
        this.level= digi.level;

    }
}


app.get("/ultimatedigimon",(req, res)=>{
    const url = "https://digimon-api.vercel.app/api/digimon/level/ultimate";
      superagent
    .get(url)
    .then((digiLevels)=>{
        const myUltimateDigimonArray = digiLevels.body.map((data)=>data);
        res.status(200).send({myUltimateDigimonArray});

    })
    .catch((error)=>{
        res.status(500).send(`Ouch ${error}`);

    });
    
});


class UltimateDigimon{
    constructor(data){
        this.name = data.name;
        this.image = data.image;
        this.level= digi.level;

    }
}





app.listen(PORT,() =>{
    console.log(`I am all ears ${PORT}`);
});