<template>
  <main>
    <h1>Login page</h1>
    아이디 : <input type="text" v-model.trim="userId" /> 
    <br />
    패스워드 : <input type="password" v-model.trim="userPassword" /> 
    <br />
    <button v-on:click="login">로그인</button> / <button @click="logout">로그아웃</button>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// router 객체 선언
const router = useRouter();

// Proxy 처리한 기본 api 주소를 선언 
const BASE_URL = '/api';

async function login() {
try {
    const loginUrl = BASE_URL + '/users'; // json 서버의 users 정보 요청을 위한 주소 설정
    const loginRes = await axios.get(loginUrl); // get 메소드로 json 서버에 요청, 응답 받아오기
    
    const userArr = loginRes.data; // 데이터 값만 추출

    // 사용자 배열 중에서 입력한 ID를 가지는 사용자가 있는지 찾기
    const findUser = userArr.find(function (item, index) {
      return item.id === userId.value;
    });

    // 사용자를 찾지 못한 경우 경고 메시지 알림
    if (findUser === undefined) {
      return alert('해당 ID 를 가지는 사용자가 존재하지 않습니다.');
    }

    // 사용자의 비밀번호를 비교하여 일치하지 않은 경우 메시지 알림
    if (findUser.password !== userPassword.value) {
      return alert('비밀번호가 일치하지 않습니다.');
    }

    // 비밀번호까지 일치하면 LocalStorage 에 auth라는 항목에 값을 true로 저장하고 알림
    localStorage.setItem('auth', 'true');
    alert('로그인 성공!')

    // 로그인 성공시 todo 페이지로 이동 
    return router.push({ name: 'todo' });

    // console.log('axios 통신 결과 : ', loginRes);
    // console.log('백엔드 유저 데이터 : ', userArr); 
  } catch (e) {
    alert('로그인 통신 ERR 발생'); 
      console.log(e);
  } 
}

// 로그아웃 기능
function logout() {
  localStorage.removeItem('auth'); 
    return alert('로그아웃 완료!');
}

const userId = ref('');
const userPassword = ref('');
</script>

<style>

</style>
