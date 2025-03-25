<template lang="">
    <div>
        <input type="text" v-model.trim="color" />
        <button v-on:click="$emit('colorChange', { color : color })">배경색 변경</button>
    </div>
</template>
<script>
export default {
    name: 'ColorEmit',
    data() {
        return {
            color: '',
        }
    }
}
</script>
<style lang="">
    
</style>