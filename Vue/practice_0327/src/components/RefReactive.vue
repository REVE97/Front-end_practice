<template>
    <div>
        <h1>아아 꿈을 꾸었습니다. 제가 차은우가 되는 꿈을...</h1>
        <h1>Ref Data : {{ refData.name }}</h1>
        <h1>Reactive : {{ reactiveData.name }}</h1>
        <button @click="changeRef">Ref Data 변경</button>
        <button @click="changeReactive">Reactive Data 변경</button>
    </div>
</template>

<!-- Vue 3 버전 -->
<script setup>
import { ref, reactive } from 'vue';

const count = ref(0);

const state = reactive({ x:0, y:0, result:0});

const refData = ref({ name: '이효석' });
const reactiveData = reactive({ name: '이효석 '});

const changeRef = () => {
    refData.value = { name: '차은우' };
};

const changeReactive = () => {
    reactiveData = { name: '차은우' };
};

</script>

<!-- Vue 2 버전 -->
<script>
export default {
    data() {
        return {
            count: 0,

            state: {
                x:0,
                y:0,
                result:0,
            },
        };
    },
}
</script>
<style lang="">
    
</style>