// 유효범위
// 전역변수, 지역변수 차이


 let vscope = 'global';       // 전역변수 
 function fscope(){
    let vscope ='local';      // let 으로 선언하면 지역변수
    vscope = 'local';         // let 으로 선언하지 않으면 전역변수가 변경
 }

 fscope();
 document.write("variable: "+vscope + "<br>");

// 전역변수 사용하는 법
 
 let MyApp = {}
 MyApp.calculate = {
    'left' : null,
    'right' : null
 }

 MyApp.coordinate = {
    'left' : null,
    'right' : null
 }

 MyApp.calculate.left = 10;
 MyApp.calculate.right = 20;

 function sum(){
    return MyApp.calculate.left + MyApp.calculate.right;
 }
 
 document.write("sum: " + sum()+"<br>");

 // 함수와 콜백

 // ex) 1   값으로서의 함수
 function cal(func,num){
   return func(num);
 }

 function increase(num){
   return num+1;
 }

 function decrease(num){
   return num-1;
 }

 document.write("increase: "+cal(increase,1)+"<br>");
 document.write("decrease: "+cal(decrease,1)+"<br>");

// ex ) 2  값으로서의 배열

let process = [
   function(input) {return input+10;},
   function(input) {return input * input;},
   function(input) {return input/2;}
];

let input = 1;
for(let i = 0; i<process.length; i++){
   input = process[i](input);
}

document.write("input: "+input+"<br>");


// 콜백 ( CallBack )

// ex ) 1
let numbers = [20,10,9,8,7,6,5,4,3,2,1];
let sortfunc = function(a,b){
   document.write(a, b+"<br>");
}

document.write(numbers.sort(sortfunc));