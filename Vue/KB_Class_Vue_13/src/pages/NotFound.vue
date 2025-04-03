<template>
    <div class="m-3">
        <h2>Not Found</h2>
        <p>요청 경로: {{ currentRoute.path }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router' 
const currentRoute = useRoute();
</script>

<style lang="scss" scoped>

</style>