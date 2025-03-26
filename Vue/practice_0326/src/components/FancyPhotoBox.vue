<!-- Named slot 실습 카드 만들기 -->

<template lang="">
    <div class="card">
        <slot name="photoName">{{ photoName }}</slot>
        <slot name="photoImg"><img :src="photoImg"></slot>
    </div>
</template>

<script>
export default {
    name: 'FancyPhotoBox',
    props: [ 'photoName','photoImg' ],
}
</script>

<style scoped>
.card {
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 16px;
    text-align: center;
    max-width: 300px;
    background-color: gray;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.2);
}

img {
    max-width: 100%;
    border-radius: 8px;
    margin-top: 10px;
}
</style>