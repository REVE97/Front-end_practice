<template lang="">
    <div>
        <input type="text" v-model.trim="name" />
        <button @click="$emit('nameChanged',{ name })">이름 전달!</button>
    </div>
</template>
<script>
export default {
    name: 'SendNameComponent',
    data() {
        return {
            name: '',
        }
    }
}
</script>
<style lang="">
    
</style>