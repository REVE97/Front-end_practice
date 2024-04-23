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