const express = require('express');
const userDB = require(`../model/user`);
const user_controller = express.Router();


user_controller.post('/userLogin', (req, res, next) => {
    userDB.login(req.body.id, req.body.pw)
    .then((user)=>{

        if (user[0].length == 0){
            res.setHeader('Content-Type', 'text/html');
            res.write("Denied");
            res.end();
        }
        else{
            res.setHeader('Content-Type', 'text/html');
            res.write("Login");
            res.end();
        }
    })
});

user_controller.post('/userLogout', (req, res, next) => {
    var approve ={'approve_id':'NO','approve_pw':'NO'};
    res.send(approve);
    // res.setHeader('Content-Type', 'text/html');
    // res.write("Logout");
    // res.end();
});
  
user_controller.post('/userRegister', (req, res, next) => {



    // console.log(req.body.pw);
    // res.setHeader('Content-Type', 'text/html');
    // res.write("TEST");
    // res.end();
});


  module.exports = user_controller;