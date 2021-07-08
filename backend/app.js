const db = require(`./util/db`); // import db pool

db.execute(`SELECT * FROM welfare_detail`)
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
});