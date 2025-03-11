document.write('구구단(4단 생략)');

for(let i=1; i<=9; i++){
    if(i==4) continue;
    for(let j=1; j<=9; j++){
        console.log(`${i}X${j}=${i*j}`);
    }
}