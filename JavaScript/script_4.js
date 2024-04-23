// 객체 ( Object )
// 객체에는 key 와 value 가 존재한다

let grades = {'REVE' : 100,'reve': 50, 'REVE97':30 };
document.write(grades['reve']+"<br>");

let grades2 = {};
grades2['REVE'] = 100;
grades2['reve'] = 50;
grades2['REVE97'] = 30;

for(key in grades){
    document.write("key: " + key + "value: " + grades[key] + "<br>");
}


let grades3 = {
    'list' : {'REVE' : 100, 'reve': 50, 'REVE97': 30},
    'show' : function(){
        document.write("Hello World!");
    }
}
document.write(grades3['list']['REVE']+"<br>");
document.write(grades3['show']());


// 모듈 ( module )
// <script src = "js 파일"></script> 형식으로 모듈화 시킴

// 라이브러리
// 자주 사용되는 로직을 재사용하기 편리하도록 정리한 일련의 코드들의 집합을 의미
// ex ) jQuery , react.js

// API ( Application Programming Interface )
// 프로그램이 동작하는 환경을 제어하기 위해서 환경에서 제공되는 조작 장치

// 자바스크립트 자체 API vs 동작하는 호스트 환경의 API
// 자체 API : ECMAScript, 자바스크립트 사전 (생활코딩), 자바스크립트 레퍼런스(MDN)
// 호스팅 환경 API : 웹브라우저 API, Node.js API

// UI ( User Interface )

// 레퍼런스, 튜토리얼 : 프로그래밍을 공부하기 위한 자료
// 레퍼런스 : 명령어의 사전 의미 , 튜토리얼 : 언어의 문법을 설명

