// Day4 2025.3.11
// 오후 보충자료: JS 2장, JS 3장

//1. 함수 선언문, 함수 표현식
//2. 함수 선언할때 function 대신 ()뒤에 => 로 표현 = 화살표 함수
//3. 화살표 함수는 자신만의 this를 가지지않음 => 화살표 함수 내부에서 this를 사용하면
//   그 this는 외부에서 값을 가져옴(전역 객체)
//4. 변수에 Ctrl + Alt + L 눌러서 console.log 문장생성

//test
document.write('Hello world');

sayHello(); //함수 선언문은 호이스팅으로 어디서든 호출 가능
// sayHello2(); //함수 표현식은 앞에 선언되면 오류발생

function sayHello() {
    console.log('안녕하세요');
}

const sayHello2 = function() {
    console.log('안녕하세요2');
}

sayHello2();

//화살표 함수 연습
const sayhello3 = () => {
    console.log('안녕하세요3');
}

sayhello3();

let add = (a,b) => {
    return a + b;
}

let toUpperCase = (str) => {
    return str.toUpperCase();
}

let sumArray = (arr) => {
    let sum = 0;
    for(let i=0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log('더하기 함수: ',add(3,4));
console.log('대문자로 변환: ',toUpperCase('w'));
console.log('배열 합: ', sumArray([3,4,5,6,7]));

//배열 함수 연습
const exArr = ['T', 'T', 'e', 't'];

exArr.shift();
exArr.push('z');
let exString = exArr.join("");

console.log('최종 문자열: ',exString);

//객체 선언 연습
const obj = {
    name:"이효석",
    age: 41,
    height: 172,
    weight: 72
};

for(let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}

//this
function sayHello4() {
    console.log(`Hello, I'm ${this.name}`);
}

const boy = {
    name: 'Mike',
    sayHello4
}

const girl = {
    name: 'Jane',
    sayHello4
}

boy.sayHello4();
girl.sayHello4();

//구조 분해 할당
const user = {
    id:1,
    t_name: "tetz",
    email: "xenosign@naver.com"
};

const {id, t_name, email} = user;

console.log('ID: ',id);
console.log('Name',t_name);
console.log('Email',email);

const fruits = ["사과", "딸기", "망고", "수박"];
const [a,b,c,d] = fruits;
console.log('배열 구조 분해 할당: ',a,b,c,d);

//전개 연산자
const fruits2 = ["사과", "바나나", "수박"];
console.log('과일: ', fruits2);
console.log('과일2: ',...fruits2);

function conLog(a,b,c) {
    console.log(a,b,c);
}

conLog(fruits2[0], fruits2[1], fruits2[2]);
conLog(...fruits2);

const string = 'apple';
const strArr = string.split("");
const strArr2 = [...string];

console.log('strArr: ',strArr);
console.log('strArr2: ',strArr2);

//객체 병합
const person = { name: '홍길동', age:30 };
const job = {title:'개발자', company: 'Google'};

const profile = {...person, ...job, location: '서울' };
console.log('객체 병합: ',profile);