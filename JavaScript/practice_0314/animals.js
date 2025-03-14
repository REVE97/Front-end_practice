//2025.3.14

// CommonJS 방식 모듈 내보내기

// 1번 방법
// const animals = ['dog','cat'];

// function showAnimals() {
//     animals.map(function (el) {
//         console.log("🚀 ~ el:", el);
//     })
// }

// //모듈을 객체 형태로 내보내기
// module.exports = {
//     animals,
//     showAnimals,
// };

// 2번 방법
// exports.animals = animals;

// exports.showAnimals = function showAnimals(){
//     animals.map(function (el) {
//         console.log("🚀 ~ el:", el);
//     })
// }

// 3번 방법
const animals = {
    animals: ['dog', 'cat'],
    showAnimals() {
        this.animals.map((el) => console.log(el));
    }
};

module.exports = animals;