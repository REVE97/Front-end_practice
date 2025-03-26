<template lang="">
  <div>
    <slot :msg="data1"></slot>
    <slot name="named" :msg="data2"></slot>
  </div>
</template>

<script>
export default {
    name: 'ScoptedSlotChild',
    data() {
        return {
            data1: '과연 나는 어떤 태그일까',
            data2: '그럼 나는?',
        }
    }
}
</script>

<style scoped>
    
</style>