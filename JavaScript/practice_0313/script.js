//2025.3.13
//오후 보충자료: Node 2장(비동기,CallBack,Promise)

//공부할 것
//1. fs.readFile 
//2. Promise
//3. Async, await

//간단한 콜백 함수 구현
// function sayMyname () {
//     console.log("🚀 제 이름은 xxx 입니다.");   
// }

// function sayMyDinner() {
//     console.log("내가 이따 먹을 저녁 메뉴는 xxx 입니다.");
// }

// function youKnow(cb) {
//     console.log('You know ~');
//     cb();
// }

// youKnow(sayMyname);
// youKnow(sayMyDinner);

// youKnow(function() {  //익명 함수를 이용해서 함수를 직접 전달
//     console.log('내일 아침은 xxx를 먹겠어요'); 
// })

// 모듈 불러오기 (비동기 처리 확인)
// const fs = require('fs');

// fs.readFile('readme.txt', function(err, data) {
//     if(err) throw err;

//     console.log('1번', data.toString());
// })

// fs.readFile('readme.txt', function(err, data) {
//     if(err) throw err;

//     console.log('2번', data.toString());
// })
// fs.readFile('readme.txt', function(err, data) {
//     if(err) throw err;

//     console.log('3번', data.toString());
// })
// fs.readFile('readme.txt', function(err, data) {
//     if(err) throw err;

//     console.log('4번', data.toString());
// })

// CallBack 이용해서 비동기 처리 = 특정 함수의 작업이 종료되어야 다른 함수를 호출(절차적 프로그래밍)
// 1번 방법
// function gnerateRandomNumber() {
//     console.log('숫자 생성 중...');

//     setTimeout(function() {
//         const randNum = Math.floor(Math.random() * 10) +1;
//         console.log(`생성된 숫자: ${randNum}`);

//         if(randNum >= 5) {
//             console.log('결과: 통과');
//         } else {
//             console.log('결과: 탈락');
//         }
//     },1000);

//     console.log('결과 확인 완료!');
// }

// gnerateRandomNumber();

// 2번 방법
// function gnerateRandomNumber(callback) {
//     console.log('숫자 생성 중...');

//     setTimeout( () => {
//         const randNum = Math.floor(Math.random() * 10) +1;
//         console.log(`생성된 숫자: ${randNum}`);

//         const result = randNum >= 5 ? '통과' : '탈락';

//         callback(randNum, result);
//     },1000);
// }

// gnerateRandomNumber((number, result) => {
//     console.log(`결과: ${result}`);
//     console.log('결과 확인 완료!');
// });

// Async 사용 (Await)
const promise = new Promise(function (resolve, reject) {
    console.log('프로미스 시작!');
    setTimeout(() => {
        console.log('setTimeout 끝!');
        resolve('프로미스로 비동기 성공!');
    },2000)
})

async function asynFunc() {
    const result = await promise;
    console.log(result);
}

asynFunc();