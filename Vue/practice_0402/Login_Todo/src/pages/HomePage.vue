<template>
  <main>
    <h1>Home Page</h1>
  </main>
</template>

<script setup>
// localStorge 실습

const obj = {
  name: '이효석',
  isOld: true,
}

localStorage.setItem('tetzObj', JSON.stringify(obj));
const getObj = JSON.parse(localStorage.getItem('tetzObj'));
console.log(getObj.name);

localStorage.setItem('name', '곽효재');
localStorage.setItem('tetz', '이효석');
localStorage.setItem('pororo', '뽀로로');
const name = localStorage.getItem('name');

// 로컬 데이터 전체삭제
// localStorage.clear();

console.log(name);
</script>

<style lang="scss" scoped>

</style>