<template> 
    <div>
        <h1>Msg Receiver</h1>
        <h1>PINA 로부터 받은 메세지는 "{{ msg }}" 입니다</h1> 
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useMsgStore } from '@/stores/msg';

const msgStore = useMsgStore();
const msg = computed(() => msgStore.msg);

</script>