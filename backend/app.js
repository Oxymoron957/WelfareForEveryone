const express = require('express');
const bodyParser= require('body-parser');
const user = require('./controller/user');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(user);

app.listen(3000);

// const server = http.createServer(app).listen(app.get('port'),function(){
//     console.log("익스프레스로 웹 서버를 실행함 : "+ app.get('port')); 

//     // db test code 
//     // db.execute(`SELECT * FROM welfare_detail`)
//     // .then((result)=>{
//     //     console.log(result);
//     // })
//  });



// DB Test Code
// db.execute(`SELECT * FROM welfare_detail`)
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// });
