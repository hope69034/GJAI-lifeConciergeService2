const express = require("express");
const bodyParser = require("body-parser");
const router = require('./router/router');
const session = require("express-session");
const mysql_session = require("express-mysql-session");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// let corsOptions = {
//   origin: 'https://www.domain.com',
//   credentials: true
// }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.get('/', (req, res)=>{
  console.log("환영합니다.");
  res.send("환영합니다.");
})

const conn = new mysql_session({
  host:"localhost",
  user:"root",
  password:"!ing12924103",
  port:3306,
  database:"lifeconcierge"
})

 //rds db  
/*  const conn = new mysql_session({
  host:"project-db-stu.ddns.net",
  user:"hope69034",
  password:"!shad5666",
  port:3307,
  database:"hope69034"
})   */


app.use(session({
  resave:false,
  saveUninitialized:true,
  secret:"smart",
  store:conn
}))

app.use(router);
app.listen(PORT, ()=>{`server is running at : ${PORT}`});