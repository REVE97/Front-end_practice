//로그인 알림창 만들기
const id = "tetz";
const pw = "1234";

const idInput = prompt('ID를 입력하세요');
const pwInput = prompt('비밀번호를 입력하세요');

if(idInput === id && pwInput === pw) {
    console.log('로그인 성공');
} else if(idInput !== id && pwInput === pw) {
    console.log('ID가 틀렸습니다.');
} else if(idInput === id && pwInput !== pw) {
    console.log('PW가 틀렸습니다.');
} else {
    console.log("망했어요");
}