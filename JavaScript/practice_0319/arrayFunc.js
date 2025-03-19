// findIndex 내장 함수 활용하여 객체 찾기 실습

// classArr.배열함수(function (각각의배열, 배열인덱스) { 
//     return 원하는조건;
// });
// classArr.배열함수((각각의배열, 배열인덱스) => 원하는조건);

// filter 내장 함수 활용하여 객체 찾기 실습
// classArr.배열함수(function (각각의배열, 배열인덱스) {  return 원하는조건; })

// map 내장 함수 활용하여 객체 찾기 실습
// ClassArr.map(function (각각의배열, 배열인덱스) { 
//     return 원하는배열의값;
// });

// reduce 내장 함수 활용하여 출력 실습
// classArr.reduce(function (합계, 각각의배열, 배열인덱스) { 
//     return 합계에대한처리;
// }, 합계초기값);


const classArr = [
    { id: 1, name: '안은현' },
    { id: 2, name: '강병현' },
    { id: 3, name: '염다빈' },
    { id: 4, name: '권다연' },
    { id: 5, name: '이혜원' },
    { id: 6, name: '김은지' },
    { id: 7, name: '이준범' },
    { id: 8, name: '김지민' },
    { id: 9, name: '김연후' },
    { id: 10, name: '강수민' },
    { id: 11, name: '김보성' },
    { id: 12, name: '양서진' },
    { id: 13, name: '장현지' },
    { id: 14, name: '최재원' },
    { id: 15, name: '채수정' },
    { id: 16, name: '유예원' },
    { id: 17, name: '최예빈' },
    { id: 18, name: '전규진' },
    { id: 19, name: '강민재' },
    { id: 20, name: '김어진' },
    { id: 21, name: '김영오' },
    { id: 22, name: '서승준' },
    { id: 23, name: '이호진' },
    { id: 24, name: '김희주' },
    { id: 25, name: '곽효재' },
    { id: 26, name: '유수상' },
    { id: 27, name: '김서연' },
    { id: 28, name: '안태현' }, 
];

// findIndex 함수 사용
const findedIndex = classArr.findIndex(function(student, index){
    console.log(student, index);
    return student.name === "곽효재";
});

const findedIndex2 = classArr.findIndex(
    (student, index) => student.name === "곽효재"
);

console.log(findedIndex, findedIndex2);

// filter 함수 사용
const overIdTenArr = classArr.filter(function (student) { 
    return student.id >= 10;
});
    
console.log('🚀 ~ overIdTenArr ~ overIdTenArr:', overIdTenArr[0]);

// map 함수 사용
const addedClassArr = classArr.map(function(student) {
    return {
        id:student.id,
        name: student.name,
        condition: 'good',
    };
});
console.log("🚀 ~ addedClassArr ~ addedClassArr:", addedClassArr[0]);

// reduce 함수 사용
const sumId = classArr.reduce(function (acc, cur, index) {
    return (acc += cur.id);
}, 0);

console.log("🚀 ~ sumId ~ sumId:", sumId);