<template>
    <div>
        <h1>Counter</h1>
        <h1>Count : {{ count }}</h1>
        <h1>두배로: {{ double }}</h1>
        <h1>지금까지 계산한 횟수 : {{ cal_count }}</h1>

        <!-- computed 활용 버튼 -->
        <button @click="count++">+</button>
        <button @click="count--">-</button>
        <!-- method 활용 버튼 -->
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script setup>
// ref, computed import 
import { ref, computed, watch } from 'vue';

// ref 초기화
const count = ref(0);
const cal_count = ref(0);

// computed 사용
const double = computed(() => count.value * 2);

// method 사용
function increment() {
    count.value++;
    cal_count.value++;
}
function decrement() {
    count.value--;
    cal_count.value++;
}

// watch 사용
watch(count, (newValue, oldValue) => {
    console.log(`카운트가 ${oldValue}에서 ${newValue} 로 변경되었습니다.`);

    if(newValue % 10 === 0 && newValue !==0 ) {
        alert(`축하합니다! ${newValue} 까지 도달했습니다!`);
    }
})

</script>

<style scoped>

</style>