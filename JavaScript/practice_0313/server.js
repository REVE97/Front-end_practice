//Express 서버 구축
const express = require('express');
const cors = require('cors');

const PORT = 4000;

const server = express();
server.use(cors());

server.get('/request',function(req, res) {
    res.status(200).json('안녕하세요. 여기는 백엔드 입니다.');
})
server.get('/error',function(req, res) {
    res.status(500).json('비상 에러.');
})

server.listen(PORT, function() {
    console.log(`서버가 ${PORT}번에서 작동 중입니다.`);
})