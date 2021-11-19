const express = require("express")
const router = express.Router();

const User = require("../models/user");
const Event = require("../models/event");

const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/eventdb";

mongoose.connect(db, err => {
    if(err){
        console.error("Error!" + err);
    } else {
        console.log("Connected to mongodb");
    }
})  

router.get("/", (req,res) => {
    res.send("From API module")
})

router.post("/register", (req, res) => {
    // Extract userdata from the request object
    let userData = req.body;

    // converted into model that mongoose understand the structure.
    let user = new User(userData);
    // then save that user into the database.
    user.save((err,registeredUser) => {
        if(err){
            console.log(err)
        } else {
            res.status(200).send({status:true,message:"Signup successful!", data:registeredUser});            
        }
    });
});

router.post("/login", (req,res) => {
    let userData = req.body;

    // check if email exist in the db or not.
    User.findOne({email:userData.email}, (err,user) => {
        if(err){
            console.log("Error!",err)
        } else {
            if(!user){
                res.status(401).send({status:false,message:"Invalid email"});
            } else {
                if(userData.password !== user.password){
                    res.status(401).send({status:false,message:"Invalid password"});
                }else {
                    res.status(200).send({status:true,message:"Login successfully!",data:user})
                }
            }
        }
    })
});

router.post("/create_events", (req,res) => {
    let eventData = req.body;
    // check if email exist in the db or not.
    Event.insertMany(eventData, (err, result) => {
        if(err){
            console.log("Error!", err)    
        } else {
            res.status(200).send({status:true,message:"Events created.",data:result});
        }
    });
});

router.get("/events", (req,res) => {

    Event.find({eventType:"Regular"}, (err, result) => {
        if(err){
            console.log("Error !"+err);
        } else {
            res.status(200).send({status:true,message:"Regular events found.",data:result});
        }
    });
});

router.get("/special_events", (req,res) => {

    Event.find({eventType:"Special"}, (err, result) => {
        if(err){
            console.log("Error !"+err);
        } else {
            res.status(200).send({status:true,message:"Special events found.",data:result});
        }
    });
});

// export router to use
module.exports = router;