<template lang="">
    <div>
        <h2>{{ todo }}</h2>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'TodoProps',
    props: ['todo'], //배열로 선언하는것이 기본 값
}
</script>
<style lang="">
    
</style>