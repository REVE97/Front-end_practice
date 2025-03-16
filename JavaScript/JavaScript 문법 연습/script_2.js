// 조건문 (Conditional Statement)

// boolean 에 따라서 조건문이 동작함 

if(true){
    console.log('result : true');
}

if(false){
    console.log('result : false');
}

if(true){
    console.log(1);
} else{
    console.log(2);
}

if(false){
    console.log(1);
} else if(true){
    console.log(2);
} else if(true){
    console.log(3);
} else {
    console.log(4);
}

// prompt('당신의 나이는?');   // 사용자로부터 정보를 받을 수 있는 기능 
// alert(prompt("당신의 나이는?"));

// && : 좌항과 우항이 모두 true 일때 참이 된다. 이러한 논리 연산자를 and 연산자라고 한다.
// || : 좌항과 우항 중에 하나라도 true 이면 true 가 되는 논리 연산자이다. 이러한 논리 연산자를 or 연산자라고 한다.

// ! : ! 는 부정의 의미로, Boolean 의 값을 역전시킨다. ex) true 를 false 로 false 를 true 로 만든다.
//     이러한 연산자를 not 연산자라고 한다.



/* 조건문을 이용한 로그인 시스템 

let id = prompt("아이디를 입력하시오: ");
let password = prompt("비밀번호를 입력하시오: ");

if(id == "reve" && password === "1234"){
    alert("인증에 성공하였습니다. ");
} else {
    alert("인증에 실패하였습니다. ");
}

*/

/* 조건문을 이용한 로그인 시스템 2

let id = prompt("아이디를 입력하시오: ");
let password = prompt("비밀번호를 입력하시오: ");

if((id == "reve" || id == "REVE") && password === "1234"){
    alert("인증에 성공하였습니다. ");
} else {
    alert("인증에 실패하였습니다. ");
}

*/

// 반복문

document.write("Coding everybody <br> ");   // document.write : 문자열을 화면에 출력

/*
while(true){
    // document.write("Hello World!");
}
*/

document.write("<hr>");

for(let i=0; i<10; i++){
    document.write('Hello World!' + i + "<br>");
}

// 함수 (function)
// 하나의 로직을 재실행 할 수 있도록 하는 것으로 코드의 재사용성을 높여준다, 유지보수에 용이해짐

function numbering(){
    document.write(1);
}

numbering();




