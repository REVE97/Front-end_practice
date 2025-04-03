<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { reactive, computed, provide, onMounted } from 'vue';
import axios from 'axios';
import Headers from './components/Header.vue';

const BASEURI = "/api/todos";
const states = reactive({ todoList: [] });

const fetchTodoList = async () => {
  try {
    const response = await axios.get(BASEURI);
    if (response.status === 200) {
      states.todoList = response.data;
    } else {
      alert('데이터 조회 실패');
    }
  } catch (error) {
    alert('에러 발생: ' + error);
  }
};

const addTodo = async ({ todo, desc }, successCallback) => {
  try {
    const payload = { todo, desc };
    const response = await axios.post(BASEURI, payload);
    if (response.status === 201) {
      states.todoList.push(response.data);
      successCallback();
    } else {
      alert('Todo 추가 실패');
    }
  } catch (error) {
    alert('에러 발생: ' + error);
  }
};

const updateTodo = async ({ id, todo, desc, done }, successCallback) => {
  try {
    const payload = { id, todo, desc, done };
    const response = await axios.put(`${BASEURI}/${id}`, payload);
    if (response.status === 200) {
      let index = states.todoList.findIndex((item) => item.id === id);
      if (index !== -1) {
        states.todoList.splice(index, 1, payload);
        successCallback();
      }
    } else {
      alert('Todo 변경 실패');
    }
  } catch (error) {
    alert('에러 발생: ' + error);
  }
};

const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${BASEURI}/${id}`);
    if (response.status === 200) {
      let index = states.todoList.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        states.todoList.splice(index, 1);
      }
    } else {
      alert('Todo 삭제 실패');
    }
  } catch (error) {
    alert('에러 발생: ' + error);
  }
};

const toggleDone = async (id) => {
  try {
    let todo = states.todoList.find((todo) => todo.id === id);
    if (!todo) return;

    let payload = { ...todo, done: !todo.done };
    const response = await axios.put(`${BASEURI}/${id}`, payload);
    if (response.status === 200) {
      todo.done = payload.done;
    } else {
      alert('Todo 완료 변경 실패');
    }
  } catch (error) {
    alert('에러 발생: ' + error);
  }
};

onMounted(fetchTodoList);

provide('todoList', computed(() => states.todoList));
provide('actions', { addTodo, deleteTodo, toggleDone, updateTodo });
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        /
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <div class="container">
    <Headers />
  </div>

  <RouterView />
</template>

<style scoped>
</style>
