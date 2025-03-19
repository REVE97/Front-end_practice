// Try/Catch 문을 활용한 에러 발생 코드 실습 (Node.js 파트)
// 에러가 발생해도 프로그램이 계속하여 실행됨

setInterval(()=> {
    // 에러가 예상되는 작업 코드
    try {
    const rand = parseInt(Math.random() * 10 );
    console.log(`생성된 수는 ${rand}`);

    if( rand > 5 ) return console.log('로또 사기');

    //에러 객체 생성
    throw new Error('에러 발생');
    } catch (error) {   // 에러 발생시 처리코드
        console.log(error);
    }
}, 2000);