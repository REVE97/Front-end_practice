<template>
    <div>
        <h1>TODO EDIT</h1>
        <div>
            <h2>todo : <input type="text" v-model.trim="editedTodo" /></h2> 
            <h2>desc : <input type="text" v-model.trim="editedDesc" /></h2> 
            <h2>
                done :
                <input type="checkbox" v-model="editedDone" /> 
            </h2>
            <button v-on:click="editTodo">수정</button> 
            <button v-on:click="router.push({ name: 'todo/detail', params: { id: todo.value.id } })">취소</button>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const curRoute = useRoute();
const router = useRouter();
const id = curRoute.params.id;
const BASE_URL = '/api';

const todo = ref({}); // ref로 변경
const editedTodo = ref('');
const editedDesc = ref('');
const editedDone = ref(false);

async function fetchTodo() {
    try {
        const todoUrl = `${BASE_URL}/todos/${id}`; 
        const todoRes = await axios.get(todoUrl);

        todo.value = todoRes.data;

        // 기존 데이터를 수정 가능하도록 입력 필드에 저장
        editedTodo.value = todo.value.todo;
        editedDesc.value = todo.value.desc;
        editedDone.value = todo.value.done;

        // console.log('TODO DETAIL 데이터 : ', todo.value);
    } catch (e) {
        alert('TODO DETAIL 통신 ERR 발생'); 
        console.log(e);
    }
}

async function editTodo() { 
    try {
        const todoUrl = `${BASE_URL}/todos/${id}`; 
        const updatedTodo = {
            todo: editedTodo.value, 
            desc: editedDesc.value, 
            done: editedDone.value,
        };

        const todoRes = await axios.put(todoUrl, updatedTodo);
        console.log('TODO 수정 통신 결과:', todoRes.data); 
        
        alert('TODO가 수정되었습니다.');
        router.push({ name: 'todo/detail', params: { id: id } });
    } catch (e) {
        alert('TODO 수정 ERR 발생'); 
        console.log(e);
    }
}

fetchTodo();
</script>

<style lang="scss" scoped>
</style>
