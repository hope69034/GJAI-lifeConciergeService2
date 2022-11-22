//[기본]app변수로 express구동 [기본]
const express = require('express');
const app = express();
//[기본]라우터경로
const router=require('./router.js');
//[기본]바디파서
const bodyparser = require("body-parser");
//[기본]바디파서를 포스트로 쓰겠다
app.use(bodyparser.urlencoded({ extended: false })); // app use router 위에와야함
//[기본]라우터구동
app.use(router);  //미들웨어로 라우터를 등록해주기
//[기본]포트설정 127.0.0.1.3001
app.listen(3001);  // 현재 서버파일의 port번호설정