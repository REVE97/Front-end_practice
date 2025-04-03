<template>
    <main>
        <h1>Todo Page</h1>
        <!-- 로딩 중에는 아래의 h2가 출력 되도록 구현 --> 
        <h2 v-if="loading">데이터 로딩 중</h2>
        <!-- 통신 실패시 아래의 h2가 출력 되도록 구현 --> 
        <h2 v-if="error">데이터 통신 중 에러 발생</h2>
        <!-- 통신 성공 시 todo 리스트 출력  --> 
        <ul v-if="!loading && !error">
            <li v-for="todo in todos" :key="todo.id">
                 ID: {{ todo.id }} /
                 <RouterLink :to="`/todo/detail/${todo.id}`">
                 {{ todo.todo }} </RouterLink>
                / {{ todo.desc }}
                / {{ todo.done }}</li>
        </ul>
    </main>

    <button @click="router.push({ name: 'todo/write' })">todo 작성</button>
</template>

<script setup>
import axios from 'axios'; 
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const BASE_URL = '/api';

const router = useRouter();

const todos = ref([]);
const loading = ref(true);
const error = ref(false);

async function fetchTodo() {
    try {
        const response = await axios.get(`${BASE_URL}/todos`);
        todos.value = response.data;
    } catch (e) {
        error.value = true;
        console.error('TODO DATA FETCH 통신 ERR 발생', e);
    } finally {
        loading.value = false;
    }
} 

fetchTodo();
</script>

<style lang="scss" scoped>

</style>
