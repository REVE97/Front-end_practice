<template>
  <main>
    <h1>Login page</h1>
    아이디 : <input type="text" v-model.trim="userId" /> 
    <br />
    패스워드 : <input type="password" v-model.trim="userPassword" /> 
    <br />
    <button v-on:click="login">로그인</button> / <button>로그아웃</button>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const userId = ref('');
const userPassword = ref('');
</script>

<style>

</style>
