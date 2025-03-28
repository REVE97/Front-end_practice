<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'

// useRouter 객체를 변수에 담아서 사용
const router = useRouter();
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        /
        <RouterLink to="/about">About</RouterLink>
        /
        <RouterLink to="/dynamic/happy">Happy</RouterLink>
        /
        <RouterLink to="/dynamic/exciting">Exciting</RouterLink>

        <!-- useRouter 버튼 실습 -->
        <div class="button-nav">
          <button @click="router.push('/')">Home</button>
          <button @click="router.push('/about')">About</button> 
          <button @click="router.back()">뒤로</button>
          <button @click="router.forward()">앞으로</button> 
          <button @click="router.go(-2)">뒤로 2번</button>
        </div>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
