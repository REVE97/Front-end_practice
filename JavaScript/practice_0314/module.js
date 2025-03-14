// CommonJS 방식 모듈 내보내기, 가져오기 실습
// * ES6 방식을 사용하려면 package.json에 "type": "module" 추가
// * CommonJS 방식을 사용하려면 package.json에 "type": "commonjs" 추가

// 모듈 가져오기

// 1번 방법
// const animals = require('./animals');

// console.log(animals);
// animals.showAnimals();

// 2번 방법
// const { animals, showAnimals } = require('./animals');
// console.log("🚀 ~  animals:",  animals);
// showAnimals();

// 3번 방법
const animals = require('./animals');

console.log("🚀 ~ animals:", animals);
animals.showAnimals();

