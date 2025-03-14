// ES6 방식 모듈 가져오기
// * ES6 방식을 사용하려면 package.json에 "type": "module" 추가
// * CommonJS 방식을 사용하려면 package.json에 "type": "commonjs" 추가

// 1번 방법: 선언부에 Export 사용하기
// import { animals, showAnimals } from './animals-es6.js';

// console.log(animals);
// showAnimals();

// 2번 방법: 마지막에 Export 사용하기
import { animals, showAnimals } from './animals-es6.js';

console.log("🚀 ~ animals:", animals);
showAnimals();