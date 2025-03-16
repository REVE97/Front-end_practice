// 배열 (array)
// 연관된 데이터을 모아서 관리하기 위해서 사용하는 데이터 타입

let name = ['reve', 'REVE', 'REVE97'];

document.write(name[1]+"<br>");

function get_members(){
    return ['reve', 'REVE', 'REVE97'];
}

members = get_members();
document.write(members[0] + "<br>");


document.write(members[0].toUpperCase()+"<br>");   // toUpperCase() : 대문자로 변환해주는 함수 ( 내장 함수 )


// 배열 데이터 추가

members.push('UREVE'); // .push : 배열 원소 추가
document.write(members + "<br>");

members = members.concat(['a', 'b']);   // 변수 = .concat : 복수의 원소를 추가
document.write(members + "<br>");

members.unshift('start');  // .unshift : 배열의 시작점에 원소를 추가 
document.write(members + "<br>");  

members.splice(1,1,'d');     // .splice (index,howmany,element ~ )  : index 부터 howmany 까지 원소를 삭제하고 element 를 추가함
document.write(members + "<br>"); 

// 배열 데이터 제거

members.shift();   // .shift : 배열의 시작점의 원소를 제거 
document.write(members + "<br>"); 

members.pop();   // .pop : 배열의 끝점의 원소를 제거 
document.write(members + "<br>"); 

// 배열 정렬

members.sort();   // .sort : 배열을 오름차순으로 정렬 
document.write(members + "<br>");  

