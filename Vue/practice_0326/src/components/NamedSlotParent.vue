<template lang="">
    <div>
        <NamedSlotChild>
            <template v-slot:top> <!-- 축약식 #top -->
                <h2>여기는 top 슬롯으로 보내는 html 입니다.</h2>
            </template>
            <template v-slot:bottom>
                <h2>여기는 bottom 슬롯으로 보내는 html 입니다.</h2>
            </template>
        </NamedSlotChild>
    </div>
</template>

<script>
import NamedSlotChild from './NamedSlotChild.vue';

export default {
    name: 'NamedSlotParent',
    components: { NamedSlotChild }
}
</script>

<style lang="">
    
</style>