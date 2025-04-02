<template>
    <div>
        <h1>CORS PAGE</h1>
    </div>
</template>

<script setup>
const CORS_URL = 'https://port-0-tetz-night-back-m5yo5gmx92cc34bc.sel4.cloudtype.app';
const PROXY_URL = '/api';

async function checkCors() { 
    try {
        // Frontend 처리
        const corsUrl = PROXY_URL + '/cors/off';

        // Backend 처리
        // const corsUrl = CORS_URL + '/cors/on'; // on->off CORS 설정이 없는 엔드 포인트로 변경
        const corsRes = await fetch(corsUrl);
        const corsData = await corsRes.json();
        console.log('CORS 응답 결과v: ', corsData); 
    } catch (e) {
        alert('CORS 응답 통신 ERR 발생'); 
        console.log(e);
    }
} 
checkCors();
</script>

<style lang="scss" scoped>

</style>