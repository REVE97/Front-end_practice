// ES6 방식 모듈 내보내기

// 1번 방법: 선언부에 Export 사용하기
// export const animals = ['dog', 'cat'];

// export function showAnimals() {
//     animals.map((el) => console.log(el));
// }

// 2번 방법: 마지막에 Export 사용하기
const animals = ['dog', 'cat'];

function showAnimals() {
    animals.map((el) =>  console.log("🚀 ~ showAnimals ~ el:", el));
}

export { animals, showAnimals };
   
