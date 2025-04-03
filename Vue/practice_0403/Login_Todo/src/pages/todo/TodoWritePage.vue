<template>
    <div>
        <h1>TODO WRITE</h1> 
        <div>
            <h2>todo : <input type="text" v-model.trim="todo"/></h2> 
            <h2>desc : <input type="text" v-model.trim="desc"/></h2> 
            <button v-on:click="addTodo">작성</button>
            <button v-on:click="router.push({ name: 'todo' })">취소</button> 
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const BASE_URL = '/api';
const todo = ref('');
const desc = ref('');

async function addTodo() {
try {
    const todoUrl = BASE_URL + '/todos'; 
    const newTodo = {
        todo: todo.value, 
        desc: desc.value, 
        done: false,
    };

    const todoRes = await axios.post(todoUrl, newTodo); 
    // console.log('TODO 추가 통신 결과 : ', todoRes); 
    router.push({ name: 'todo' });
    } catch (e) {
        alert('TODO 추가 통신 ERR 발생'); 
        console.log(e);
}}
</script>

<style lang="scss" scoped>

</style>