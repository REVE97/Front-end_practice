<template lang="">
    <h1>{{ siteInfo.siteName }}</h1>
    <a v-bind:href="siteInfo.siteUrl">{{ siteInfo.siteName }} 링크</a>
    <h2>방문 여부: {{ siteInfo.visited }}</h2>
    <hr />
</template>
<script>
export default {
    name: 'PropsList2',
    props: ['siteInfo'],
}
</script>
<style lang="">
    
</style>