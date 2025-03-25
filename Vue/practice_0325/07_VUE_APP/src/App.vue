<!-- 컴포넌트 import -->
<script setup>
  import CheckList from './components/CheckList.vue';
  import TodoProps from './components/TodoProps.vue';
  import EventProps from './components/EventProps.vue';
  import PropsList from './components/PropsList.vue';
  import PropsList2 from './components/PropsList2.vue';
  import SendNameComponent from './components/SendNameComponent.vue';
  import ColorEmit from './components/ColorEmit.vue';

  // 알림 이벤트 함수 
  const sendingEvent = () => {
    alert('부모 컴포넌트님이 말씀하셨다');
  }
</script>

<!-- HTML 파트 -->
<template>
  <div class="todo">
    <h1>오늘의 할일</h1>
    <CheckList />
    <hr />
    <TodoProps todo="Vue 공부하기"/>
    <TodoProps todo="복습하기" />
    <CheckList />

    <hr />
    <!-- 이벤트 props -->
    <EventProps :parentEvent="sendingEvent" />
  </div>

  <hr />
  <!-- props 실습 코드 (Name,url,visited) -->
  <PropsList siteName="네이버" siteUrl="http://naver.com" visited="방문" /> 
  <PropsList siteName="다음" siteUrl="http://daum.net" visited="미방문" /> 
  <PropsList2 :siteInfo="siteData" />

  <hr />
  <!-- emit 실습 -->
  <div :style ="{ backgroundColor: color }">
    <h1>너의 이름은 {{ name }}</h1>
    <SendNameComponent @nameChanged="nameChangeHandler" />
    <!-- emit으로 배경색 변경 -->
    <ColorEmit v-on:colorChange="colorChangeHandler" />
  </div>

  <hr />

</template>

<script>
   export default {
    name: 'App',
    data() {
      return {
        siteData: {
          siteName: '페이스북',
          siteUrl: 'http://fackbook.com',
          visited: '방문',
        },
        name: '',
        color: 'skyblue',
      };
    },
    methods: {
      nameChangeHandler(e) {
      this.name = e.name;
      },
      colorChangeHandler(e) {
        this.color = e.color;
      }
    }
  }
</script>

<style scoped></style>
