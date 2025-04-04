<template> 
    <div>
        <h1>Msg Sender</h1>
        <input type="text" v-model.trim="userInput" />
        <button @click="editMsg(userInput)">메세지 공간 이동!</button> 
    </div>
</template>
<script setup>
import { useMsgStore } from '@/stores/msg';
import { ref } from 'vue';

const msgStore = useMsgStore();
const { editMsg } = msgStore;

const userInput = ref('');
 
</script>