<template lang="">
    <div>
        <!-- slot 이름 없으면 default , default 값은 임의 지정 -->
       <ScoptedSlotChild v-slot:default="fromChild">
            <h1>{{ fromChild.msg }}</h1>
        </ScoptedSlotChild>
        <ScoptedSlotChild v-slot:named="fromChild2">
            <p>{{ fromChild2.msg }}</p>
        </ScoptedSlotChild>
    </div>
</template>

<script>
import ScoptedSlotChild from './ScoptedSlotChild.vue';

export default {
    name: 'ScoptedSlotParent',
    components: { ScoptedSlotChild }
}
</script>

<style lang="">
    
</style>