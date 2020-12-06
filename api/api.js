const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const mongoose = require("mongoose");
const uri = "mongodb+srv://jorger01:Merlincillo921.@cluster0.gs0ud.mongodb.net/mostHated"
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });


const SummonerSchema = new mongoose.Schema({
    accountId: String,
    id: String,
    name: String,
    profileIconId: Number,
    puuid: String,
    revisionDate: Number,
    summonerLevel: Number,
    nReported: Number
});

let SummonerModel = mongoose.model("Summoner", SummonerSchema, "summoners");

app.post("/summoners", function(request, response){

    SummonerModel.findOne({accountId: request.body.accountId}, function(err, res){

        if(err){
            console.log(err);
        } else {
            console.log(res);

            if(res != null){

                SummonerModel.updateOne({accountId : request.body.accountId}, {name: request.body.name, nReported: res.nReported + 1}, function(err, resu){

                    if(err){
                        console.log(err);
                    } else {
                        console.log(resu);
                    }
                })
            } else {

                SummonerModel.create({
                    accountId: request.body.accountId,
                    id: request.body.id,
                    name: request.body.name,
                    profileIconId:request.body.profileIconId,
                    puuid: request.body.puuid,
                    revisionDate: request.body.revisionDate,
                    summonerLevel: request.body.summonerLevel,
                    nReported: request.body.nReported
                }, function(err, res){
                    if(err){
                        console.log(err);
                    } else {
                        response.send(res)
                    }
                })
            }
        }
    })

    
})

app.get("/summoners", function(request, response){

    SummonerModel.find(function(err, res){

        if (err){
            console.log(err);
        }else {
            response.send(res)
        }
    }).sort({nReported: "desc"}).limit(50)
})


app.listen(3000)