// Day3 2025.3.10
// 통합강의: HTML,CSS,JS 교안 9장 자바스크립트 기본 문법

let array= [1, 10, 20, , 30, ,60];

for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

for(let i in array){
    console.log(i, array[i]);
}

for(let i of array) {
    console.log(i);
}