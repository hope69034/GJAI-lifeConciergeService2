const { spawn } = require("child_process");
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {    
  console.log('메인라우터 진입 성공')
  res.redirect("http://127.0.0.1:5500/user.html")
});

router.post('/map', function (req, res) {    
  console.log('map라우터 진입 성공')
  /* let userInput = req.query.userInput */
  let userInput1 = req.body.userInput1 
  let userInput2 = req.body.userInput2
  console.log('유저인풋 2개 변수 선언 성공')
  const result = spawn("python3", ["map.py",[userInput1,userInput2]]);
  console.log(`파이썬 파일 변수 선언 성공  |  유저인풋1 : ${userInput2}, 유저인풋2 : ${userInput2}`)
  outp.stdout.on("data", (result) => {  
    console.log('stdout 진입 성공')
    console.log('result : ' + result.toString());
    res.json(result.toString())
  }) 
});

module.exports = router;