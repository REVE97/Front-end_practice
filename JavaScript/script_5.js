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
 
 document.write("sum: " + sum());

 