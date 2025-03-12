//2025.3.12
//오후 보충자료: JS 3장, Node 1장
//1. new Date() : 현재 날짜 시간 출력 객체

//선택자
const boxEl = document.querySelector('.box');
const boxE2 = document.getElementById('dateBtn');
const list = document.querySelector(".list");

//알림창 함수 생성
function alertFunc() {
    alert('click');
}
//날짜 출력 함수 생성
function alertFunc2() {
    console.log("🚀 Date:",new Date()); //현재 날짜 시간 출력 객체
}

//console 확인
console.log(boxEl);
console.log(boxE2);

//addEventListener 이벤트 발생
boxEl.addEventListener('click', alertFunc);
boxE2.addEventListener('click', alertFunc2);

//e.target 실습
list.addEventListener("click", function (e) {
    console.log("🚀 ~ console.log(e.target:", console.log(e.target));
});

//classList 실습 (클릭하면 상자가 오렌지 배경색으로)
const boxE4 = document.querySelector('.box2');
boxE4.addEventListener('click', function(){
    if(boxE4.classList.contains('orange')){
        boxE4.classList.remove('orange');
    } else {
        boxE4.classList.add('orange');
    }
})

//TODO 리스트 만들기
const todo = document.querySelector('#todolist');
const btn = document.getElementById('btn');
const input = document.getElementById('input');

btn.addEventListener('click', function () {
    const li = document.createElement('li');

    if (input.value === '') {
      return alert('할 일을 입력해 주세요');
    }

    li.textContent = input.value;

    li.addEventListener('click', function (e){
      e.target.remove();
    });

    todo.appendChild(li);
});
