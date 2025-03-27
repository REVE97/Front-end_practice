<template>
    <div>
        <Vue3Props :msg="msg" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Vue3Props from './PropsChild.vue'

const msg = ref('props로 전달될 문자열');
</script>

<style lang="scss" scoped>

</style>