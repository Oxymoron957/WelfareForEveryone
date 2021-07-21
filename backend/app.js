// const http = require('http');
 
// const hostname = '10.178.0.9';
// const port =3000;
 				
// http.createServer((req, res) => {		
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// }).listen(port, hostname, () => {		
//   console.log(`Server running at https://${hostname}:${port}/`);
// });

const express = require('express');
const bodyParser= require('body-parser');
const user_router = require('./controller/user');

const app = express();

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// app.use(user_router);

// Middleware 생성
app.use((req, res, next)=>{
    console.log("Request Recieved"); // Request 받았다고 출력
    const approve ={'result':'Successful'}; // 반환할 JSON 생성
    res.send(approve); // JSON 보내기 
});

app.listen(3000);

